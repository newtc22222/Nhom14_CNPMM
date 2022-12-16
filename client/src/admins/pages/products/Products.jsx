import { useEffect, useMemo, useState } from "react";
import { Avatar, Box, Typography, Button, Stack } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import apiProducts from "../../apis/products.api";
import { grey } from "@mui/material/colors";
import avt from "../../../images/user.png";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import EditIcon from '@mui/icons-material/Edit';
import UpdateProduct from "./UpdateProduct";
import { Link } from "react-router-dom";

const Products = ({ setSelectedLink, link }) => {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const[deletaId, setDeleteId] = useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const format= (n) => {
    return '$'+n.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  const handleClose = () => {
    setOpen(false);
  };
  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) =>
      products.find((row) => row._id === id)
    );
    //console.log(selectedRowsData[0]?._id);
    setDeleteId(selectedRowsData[0]?._id);
  };


  const handleDelete = () => {
    if (open === true) {
      apiProducts
        .removeProducts(deletaId)
        .then((res) => {
          toast.success("Xóa thành công");
        })
        .catch((error) => {
          toast.error("Xóa thất bại!");
        });
    }
    setOpen(false);
  };

  useEffect(() => {
    setSelectedLink(link);
    const getProducts = async () => {
      try {
        const response = await apiProducts.getAllProducts();
        //console.log(response);
        setProducts(response);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [products]);

  const columns = useMemo(
    () => [
      {
        field: "images",
        headerName: "Avatar",
        width: 60,
        renderCell: async (param) => {
          console.log(param);
            // <Avatar src={source.source}
            <Avatar src={param[0]?.images[0]} />
        },
        // renderCell: (param) => {
        //   // console.log(source);
        //   return (
        //     // <Avatar src={source.source}
        //     <Avatar src={avt} />
        //   );
        // },
        sortable: false,
        filterable: false,
      },
      { field: "name", headerName: "Name", width: 170 },
      { field: "categoryId", headerName: "CategoryId", width: 170 },
      { field: "price", headerName: "Price", width: 200, renderCell: (cellValue)=> `${format(cellValue.row.price)} VND`
          
      },
      {
        field: "description",
        headerName: "Description",
        width: 200,
      },
      { field: "_id", headerName: "Id", width: 220 },
      // {
      //   field: "Delete",
      //   width: 150,
      //   renderCell: (cellValue) => {
      //     return (
      //       <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleClickOpen}>
      //         Delete
      //       </Button>
      //     );
      //   },
      // },
    ],
    []
  );

  return (
    <Box
      sx={{
        height: 470,
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: "center", mt: 3, mb: 3 }}
      >
        Manage Products
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Bạn có muốn xóa hay không?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => handleClose()}>Hủy</Button>
          <Button onClick={(cellValue) => handleDelete(cellValue)}>Xóa</Button>
        </DialogActions>
      </Dialog>
      <DataGrid
        columns={columns}
        rows={products}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? grey[200] : grey[900],
          },
        }}
      />
      <Stack direction="row" spacing={1.5} mt = "1rem">
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handleClickOpen}
        >
          Delete
        </Button>
        <Link to = "/products/update">
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={handleClickOpen}
        >
          Update
        </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default Products;
