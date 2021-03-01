import React, { Component } from 'react';
import comment from "../../images/img-news/comment.png";
import like from "../../images/img-news/like.png";

class News extends Component {
  render() {
    return (
      <section className="news" id="homeNews">
        <div className="container-fluid main-container-940" >
          <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#dienanh24h" role="tab">Điện Ảnh
          24h</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#review" role="tab">Review</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="contact-tab" data-toggle="tab" href="#khuyenmai" role="tab">Khuyến Mãi</a>
            </li>
          </ul>
          <div className="tab-content" id="myNewsContent">
            <div className="tab-pane fade show active" id="dienanh24h" role="tabpanel">
              <div className="row">
                <div className="news__col">
                  <div className="news__image">
                    <a href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh">
                      <img src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg" alt />
                    </a>
                  </div>
                  <a href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh" className="news__title">
                    <p>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</p>
                  </a>
                  <p className="news__description">Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo
                  độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng!
            </p>
                  <div className="news__icons">
                    <div className="wrapIcon like">
                      <a href="#">
                        <img src={like} alt />
                        <p>0</p>
                      </a>
                    </div>
                    <div className="wrapIcon comment">
                      <a href="#">
                        <img src={comment} alt />
                        <p>0</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="news__col">
                  <div className="news__image">
                    <a href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                      <img src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png" alt />
                    </a>
                  </div>
                  <a href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu" className="news__title">
                    <p>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu </p>
                  </a>
                  <p className="news__description">Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc
                  bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng
                  lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng của tác
                  phẩm.
            </p>
                  <div className="news__icons">
                    <div className="wrapIcon like">
                      <a href="#">
                        <img src={like} alt />
                        <p>0</p>
                      </a>
                    </div>
                    <div className="wrapIcon comment">
                      <a href="#">
                        <img src={comment} alt />
                        <p>0</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="news__col">
                  <div className="news__image">
                    <a href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                      <img src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg" alt />
                    </a>
                  </div>
                  <a href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman" className="news__title">
                    <p>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU
                TIÊN CỦA VIỆT NAM – VINAMAN</p>
                  </a>
                  <p className="news__description">Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính
                  thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng giá trị
                  giải thưởng lên đến 60 triệu đồng.
            </p>
                  <div className="news__icons">
                    <div className="wrapIcon like">
                      <a href="#">
                        <img src={like} alt />
                        <p>0</p>
                      </a>
                    </div>
                    <div className="wrapIcon comment">
                      <a href="#">
                        <img src={comment} alt />
                        <p>0</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="news__col">
                  <div className="news__image">
                    <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang">
                      <img src="https://s3img.vcdn.vn/123phim/2020/11/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png" alt />
                    </a>
                  </div>
                  <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang" className="news__title">
                    <p>[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực...</p>
                  </a>
                  <p className="news__description">Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những
                  mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã
                  làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và
                  còn nhiều lý do khác khiến người
            </p>
                  <div className="news__icons">
                    <div className="wrapIcon like">
                      <a href="#">
                        <img src={like} alt />
                        <p>0</p>
                      </a>
                    </div>
                    <div className="wrapIcon comment">
                      <a href="#">
                        <img src={comment} alt />
                        <p>0</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="news__col">
                  <div className="news__small">
                    <div className="news__image">
                      <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                        <img src="https://s3img.vcdn.vn/123phim/2020/07/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png" alt />
                      </a>
                    </div>
                    <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich" className="news__title">
                      <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn
                  Quốc mùa dịch</p>
                    </a>
                  </div>
                  <div className="news__small">
                    <div className="news__image">
                      <a href="https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan">
                        <img src="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png" alt />
                      </a>
                    </div>
                    <a href="https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan" className="news__title">
                      <p>Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan</p>
                    </a>
                  </div>
                  <div className="news__small">
                    <div className="news__image">
                      <a href="https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han">
                        <img src="https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png" alt />
                      </a>
                    </div>
                    <a href="https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han" className="news__title">
                      <p>Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn</p>
                    </a>
                  </div>
                  <div className="news__small">
                    <div className="news__image">
                      <a href="https://tix.vn/goc-dien-anh/7949-6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood">
                        <img src="https://s3img.vcdn.vn/123phim/2020/08/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png" alt />
                      </a>
                    </div>
                    <a href="https://tix.vn/goc-dien-anh/7949-6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood" className="news__title">
                      <p>6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất
                  Hollywood</p>
                    </a>
                  </div>
                </div>
                <div className="SeeMoreNews">
                  <button className="viewMore">XEM THÊM</button>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="review" role="tabpanel">
              <div className="row">
                <div className="col-xs-12 news__col">
                  <div className="news__image">
                    <a href="https://tix.vn/review/7947-review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket">
                      <img src="https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png" alt />
                    </a>
                  </div>
                  <a href="https://tix.vn/review/7947-review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket" className="news__title">
                    <p>Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết</p>
                  </a>
                  <p className="news__description">Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám
            </p>
                  <div className="news__icons">
                    <div className="wrapIcon like">
                      <a href="#">
                        <img src={like} alt />
                        <p>0</p>
                      </a>
                    </div>
                    <div className="wrapIcon comment">
                      <a href="#">
                        <img src={comment} alt />
                        <p>0</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 news__col">
                  <div className="news__image">
                    <a href="https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war">
                      <img src="https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png" alt />
                    </a>
                  </div>
                  <a href="https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war" className="news__title">
                    <p>Review: Dinh Thự Oan Khuất (Ghost Of War)</p>
                  </a>
                  <p className="news__description">Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan
                  Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
            </p>
                  <div className="news__icons">
                    <div className="wrapIcon like">
                      <a href="#">
                        <img src={like} alt />
                        <p>0</p>
                      </a>
                    </div>
                    <div className="wrapIcon comment">
                      <a href="#">
                        <img src={comment} alt />
                        <p>0</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 news__col">
                  <div className="news__image">
                    <a href="https://tix.vn/review/7924-blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh">
                      <img src="https://s3img.vcdn.vn/123phim/2020/06/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png" alt />
                    </a>
                  </div>
                  <a href="https://tix.vn/review/7924-blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh" className="news__title">
                    <p>‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh</p>
                  </a>
                  <p className="news__description">Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo
                  diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức nhối
                  nước Mỹ cho tới tận hôm nay.
            </p>
                  <div className="news__icons">
                    <div className="wrapIcon like">
                      <a href="#">
                        <img src={like} alt />
                        <p>0</p>
                      </a>
                    </div>
                    <div className="wrapIcon comment">
                      <a href="#">
                        <img src={comment} alt />
                        <p>0</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 news__col">
                  <div className="news__image">
                    <a href="https://tix.vn/review/7918-american-sniper-chinh-nghia-hay-phi-nghia">
                      <img src="https://s3img.vcdn.vn/123phim/2020/05/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png" alt />
                    </a>
                  </div>
                  <a href="https://tix.vn/review/7918-american-sniper-chinh-nghia-hay-phi-nghia" className="news__title">
                    <p>American Sniper - Chính nghĩa hay phi nghĩa?</p>
                  </a>
                  <p className="news__description">American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của
                  Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người xem
                  qua từng thời khắc khác nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội,
                  rồi tham chiến. Từng khoảnh khắc bắt
            </p>
                  <div className="news__icons">
                    <div className="wrapIcon like">
                      <a href="#">
                        <img src={like} alt />
                        <p>0</p>
                      </a>
                    </div>
                    <div className="wrapIcon comment">
                      <a href="#">
                        <img src={comment} alt />
                        <p>0</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 news__col">
                  <div className="news__small news__smallOne">
                    <div className="news__image">
                      <a href="https://tix.vn/review/7894-review-spider-man-into-the-spider-vesre">
                        <img src="https://s3img.vcdn.vn/123phim/2020/05/review-spider-man-into-the-spider-vesre-15886520889426.png" alt />
                      </a>
                    </div>
                    <a href="https://tix.vn/review/7894-review-spider-man-into-the-spider-vesre" className="news__title">
                      <p>Review: Spider-Man: Into The Spider-Vesre </p>
                    </a>
                  </div>
                  <div className="news__small news__smallTwo">
                    <div className="news__image">
                      <a href="https://tix.vn/review/7886-covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011">
                        <img src="https://s3img.vcdn.vn/123phim/2020/03/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg" alt />
                      </a>
                    </div>
                    <a href="https://tix.vn/review/7886-covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011" className="news__title">
                      <p>COVID-19 là bản chính thức của MEV-1 phim contagion (2011)</p>
                    </a>
                  </div>
                  <div className="news__small news__smallThree">
                    <div className="news__image">
                      <a href="https://tix.vn/review/7882-review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the">
                        <img src="https://s3img.vcdn.vn/123phim/2020/03/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg" alt />
                      </a>
                    </div>
                    <a href="https://tix.vn/review/7882-review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the" className="news__title">
                      <p>[Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ lầy lội và hài hước
                  đến thế</p>
                    </a>
                  </div>
                  <div className="news__small news__smallFour">
                    <div className="news__image">
                      <a href="https://tix.vn/review/7881-review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant">
                        <img src="https://s3img.vcdn.vn/123phim/2020/03/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg" alt />
                      </a>
                    </div>
                    <a href="https://tix.vn/review/7881-review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant" className="news__title">
                      <p>[Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh hùng Valiant</p>
                    </a>
                  </div>
                </div>
                <div className="SeeMoreNews">
                  <button className="viewMore">XEM THÊM</button>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="khuyenmai" role="tabpanel">
              <div className="row">
                <div className="news__col">
                  <div className="news__image">
                    <a href="https://tix.vn/khuyen-mai/7958-bhd-59k-ve-ca-tuan">
                      <img src="https://s3img.vcdn.vn/123phim/2020/11/bhd-59k-ve-ca-tuan-16045659414321.jpg" alt />
                    </a>
                  </div>
                  <a href="https://tix.vn/khuyen-mai/7958-bhd-59k-ve-ca-tuan" className="news__title">
                    <p>BHD 59K/VÉ CẢ TUẦN !!!</p>
                  </a>
                  <p className="news__description">Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                  59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
            </p>
                  <div className="news__icons">
                    <div className="wrapIcon like">
                      <a href="#">
                        <img src={like} alt />
                        <p>0</p>
                      </a>
                    </div>
                    <div className="wrapIcon comment">
                      <a href="#">
                        <img src={comment} alt />
                        <p>0</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="news__col">
                  <div className="news__image">
                    <a href="https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve">
                      <img src="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg" alt />
                    </a>
                  </div>
                  <a href="https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve" className="news__title">
                    <p>TIX 1K/VÉ NGẠI CHI GIÁ VÉ</p>
                  </a>
                  <p className="news__description">Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02
                  voucher thanh toán ZaloPay thả ga
            </p>
                  <div className="news__icons">
                    <div className="wrapIcon like">
                      <a href="#">
                        <img src={like} alt />
                        <p>0</p>
                      </a>
                    </div>
                    <div className="wrapIcon comment">
                      <a href="#">
                        <img src={comment} alt />
                        <p>0</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="news__col">
                  <div className="news__image">
                    <a href="https://tix.vn/khuyen-mai/7954-dong-gia-1k-ve-khi-mua-ve-qua-tix">
                      <img src="https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png" alt />
                    </a>
                  </div>
                  <a href="https://tix.vn/khuyen-mai/7954-dong-gia-1k-ve-khi-mua-ve-qua-tix" className="news__title">
                    <p>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX </p>
                  </a>
                  <p className="news__description">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX
                  Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.
            </p>
                  <div className="news__icons">
                    <div className="wrapIcon like">
                      <a href="#">
                        <img src={like} alt />
                        <p>0</p>
                      </a>
                    </div>
                    <div className="wrapIcon comment">
                      <a href="#">
                        <img src={comment} alt />
                        <p>0</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="news__col">
                  <div className="news__image">
                    <a href="https://tix.vn/khuyen-mai/7919-bhd-star-ve-chi-59-000d-ca-tuan">
                      <img src="https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg" alt />
                    </a>
                  </div>
                  <a href="https://tix.vn/khuyen-mai/7919-bhd-star-ve-chi-59-000d-ca-tuan" className="news__title">
                    <p>BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</p>
                  </a>
                  <p className="news__description">Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                  59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.
            </p>
                  <div className="news__icons">
                    <div className="wrapIcon like">
                      <a href="#">
                        <img src={like} alt />
                        <p>0</p>
                      </a>
                    </div>
                    <div className="wrapIcon comment">
                      <a href="#">
                        <img src={comment} alt />
                        <p>0</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="news__col">
                  <div className="news__small news__smallOne">
                    <div className="news__image">
                      <a href="https://tix.vn/khuyen-mai/7908-beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon">
                        <img src="https://s3img.vcdn.vn/123phim/2020/05/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png" alt />
                      </a>
                    </div>
                    <a href="https://tix.vn/khuyen-mai/7908-beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon" className="news__title">
                      <p>Beta Cineplex trở lại với hàng loạt ưu đãi lớn</p>
                    </a>
                  </div>
                  <div className="news__small news__smallTwo">
                    <div className="news__image">
                      <a href="https://tix.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai">
                        <img src="https://s3img.vcdn.vn/123phim/2019/11/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg" alt />
                      </a>
                    </div>
                    <a href="https://tix.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai" className="news__title">
                      <p>[123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái</p>
                    </a>
                  </div>
                  <div className="news__small news__smallThree">
                    <div className="news__image">
                      <a href="https://tix.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay">
                        <img src="https://s3img.vcdn.vn/123phim/2019/11/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg" alt />
                      </a>
                    </div>
                    <a href="https://tix.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay" className="news__title">
                      <p>[123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay
                </p>
                    </a>
                  </div>
                  <div className="news__small news__smallFour">
                    <div className="news__image">
                      <a href="https://tix.vn/khuyen-mai/7792-mega-gs-mot-doa-hoa-thay-ngan-loi-yeu">
                        <img src="https://s3img.vcdn.vn/123phim/2019/10/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg" alt />
                      </a>
                    </div>
                    <a href="https://tix.vn/khuyen-mai/7792-mega-gs-mot-doa-hoa-thay-ngan-loi-yeu" className="news__title">
                      <p>[Mega GS] Một đoá hoa thay ngàn lời yêu</p>
                    </a>
                  </div>
                </div>
                <div className="SeeMoreNews">
                  <button className="viewMore">XEM THÊM</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default News;