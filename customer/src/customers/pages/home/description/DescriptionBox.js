import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const DescriptionBox = () => {
  const [fullSize, setFullSize] = useState(0);

  const maxHeight = (fullSize) ? '100%' : '140px';
  const shadow = (fullSize) ? '' : '0 -8px 8px #ccc inset';
  const textExpand = (fullSize) ? 'THU GỌN' : 'MỞ RỘNG';

  return (
    <Box sx={{ marginTop: '15px', marginBottom: '15px' }}>
      <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Good Fair - Trao đổi, mua bán và tích lũy vật chất</Typography>
      <Typography
        sx={{
          fontSize: '0.75rem',
          color: '#666',
          height: maxHeight,
          overflow: 'hidden',
          boxShadow: shadow
        }}
      >
        Good Fair chính thức gia nhập thị trường Việt Nam vào đầu năm 2023, với mục đích tạo ra cho bạn một kênh rao vặt trung gian, kết nối người mua với người bán lại với nhau bằng những giao dịch cực kỳ đơn giản,
        tiện lợi, nhanh chóng, an toàn, mang đến hiệu quả bất ngờ. <br />
        Đến nay, Good Fair tự hào là Website rao vặt có chất lượng ổn định và tiềm năng.
        Hàng ngàn món hời từ <a href="/">Bất động sản</a>, <a href="/">Nhà cửa</a>, <a href="/">Xe cộ</a>, <a href="/">Đồ điện tử</a>, Thú cưng, Vật dụng cá nhân...
        đến <a href="/">tìm việc làm</a>, thông tin tuyển dụng, các dịch vụ - du lịch được đăng tin, rao bán trên Good Fair. <br />
        Với Good Fair, bạn có thể dễ dàng mua bán, trao đổi bất cứ một loại mặt hàng nào, dù đó là đồ cũ hay đồ mới với nhiều lĩnh vực: <br />
        <strong>Bất động sản:</strong> Cho thuê, Mua bán nhà đất, căn hộ chung cư, văn phòng mặt bằng kinh doanh, phòng trọ đa dạng về diện tích, vị trí<br />
        <strong>Phương tiện đi lại:</strong> xe ô tô, xe máy có độ bền cao, giá cả hợp lý, giấy tờ đầy đủ.<br />
        <strong>Đồ dùng cá nhân:</strong> quần áo, giày dép, túi xách, đồng hồ... đa phong cách, hợp thời trang.<br />
        <strong>Đồ điện tử:</strong> điện thoại di động, máy tính bảng, laptop, tivi, loa, amply...; đồ điện gia dụng: máy giặt, tủ lạnh, máy lạnh điều hòa... với rất nhiều nhãn hiệu, kích thước khác nhau.<br />
        <strong>Vật nuôi, thú cưng đa chủng loại:</strong> gà, chó (chó phốc sóc, chó pug, chó poodle...), chim, mèo (mèo anh lông ngắn, mèo munchkin...), cá, hamster giá cực tốt.<br />
        <strong>Tuyển dụng, việc làm</strong> với hàng triệu công việc hấp dẫn, phù hợp tại Việc Làm Tốt - Kênh tuyển dụng hiệu quả, uy tín được phát triển bởi Good Fair.<br />
        <strong>Dịch vụ, du lịch:</strong> khách sạn, vé máy bay, vé tàu, vé xe, tour du lịch và các voucher du lịch... uy tín, chất lượng.<br />
        <strong>Đồ ăn, thực phẩm:</strong> các món ăn được chế biến thơm ngon, hấp dẫn, thực phẩm tươi sống, an toàn &amp; giá cả hợp lý. <br />
        Và còn rất nhiều mặt hàng khác nữa đã và đang được rao bán tại Good Fair.<br />
        Mỗi người trong chúng ta đều có những sản phẩm đã qua sử dụng và không cần dùng tới nữa. Vậy còn chần chừ gì nữa mà không để nó trở nên giá trị hơn với người khác. Rất đơn giản, bạn chỉ cần chụp hình lại,
        mô tả cụ thể về sản phẩm và sử dụng ứng dụng Đăng tin miễn phí của Good Fair là đã có thể đến gần hơn với người cần nó.<br />
        Không những thế, website goodfair.com còn cung cấp cho bạn thông tin về giá cả các mặt hàng để bạn có thể tham khảo.
        Đồng thời, thông qua Blog kinh nghiệm, Good Fair sẽ tư vấn, chia sẻ cho bạn những thông tin bổ ích, bí quyết, mẹo vặt giúp bạn có những giao dịch mua bán an toàn, đảm bảo.
        Good Fair cũng sẵn sàng hỗ trợ bạn trong mọi trường hợp cần thiết.<br />
        Chúc các bạn có những trải nghiệm mua bán tuyệt vời trên Good Fair.
      </Typography>
      <div style={{ display:'flex', justifyContent: 'center' }}>
        <Button
          variant='text'
          sx={{ color: 'darkblue' }}
          onClick={() => setFullSize(prev => !prev)}
        >{textExpand}</Button>
      </div>
    </Box>
  )
}

export default DescriptionBox;