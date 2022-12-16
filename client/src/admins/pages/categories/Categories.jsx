import { useEffect, useMemo, useState } from "react";
import { Avatar, Box, Typography, Button} from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import apiCategories from "../../apis/categories.api";
import moment from "moment";
import { grey } from "@mui/material/colors";
import avt from "../../../images/user.png";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";

const Categories = ({ setSelectedLink, link }) => {
  const [categories, setCategories] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const [deletaId, setDeleteId] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    if (open === true) {
      apiCategories
        .removeCategory(deletaId)
        .then((res) => {
          toast.success("Xóa thành công");
        })
        .catch((error) => {
          toast.error("Xóa thất bại!");
        });
    }
    setOpen(false);
  };

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) =>
    categories.find((row) => row._id === id)
    );
    //console.log(selectedRowsData[0]?._id);
    setDeleteId(selectedRowsData[0]?._id);
  };
  useEffect(() => {
    setSelectedLink(link);
    const getCategories = async () => {
      try {
        const response = await apiCategories.getAllCategories();
        //console.log(response);
        setCategories(response);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, [categories]);
  const columns = useMemo(
    () => [
      { field: "type", headerName: "Type", width: 170 },
      { field: "subtype", headerName: "Subtype", width: 170 },
      { field: "description", headerName: "Description", width: 250 },
      { field: "_id", headerName: "Id", width: 220 },
      // {
      //   field: "Delete",
      //   width: 150,
      //   renderCell: (cellValue) => {
      //     return (
      //       <div>
      //     </div>
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
      Manage Categories
    </Typography>
    <DataGrid
      columns={columns}
      rows={categories}
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
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handleClickOpen}
      >
        Delete
      </Button>
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
        <Button onClick={handleClose} autoFocus>
          Hủy
        </Button>
        <Button onClick={() => handleDelete()}>Xóa</Button>
      </DialogActions>
    </Dialog>
  </Box>
  )
}

export default Categories;