'use trict';
const countDate = new Date('jan 22, 2023 00:00:00').getTime();
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var audio = new Audio('./assets/sourse/music/tet_nguyen_dan/TetNguyenDan-V.Music-1444104.mp3');
const playList = $(".list");
const playBtn = $('.play__song');
const progress = $("#progress");
const nextBtn = $('.next__song');
const randomBtn =$('.random__song');
const prevBtn = $('.back__song');
const repeatBtn = $('.re__play');
const playlist = $('.list__item_music');
const btnList = $('#music_list');
const btnPlay = $('#music_play')
const closeList = $('.list_music');
const listZodiac = $('.testi-content');

const app = {
    newYear: function () {
        const now = new Date().getTime();
        
        gap = countDate - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const d = Math.floor(gap / day)
        const h = Math.floor((gap%day)/hour)
        const m = Math.floor((gap%hour)/minute)
        const s = Math.floor((gap%minute)/second)
    
        $('.d').innerHTML = d;
        $('.h').innerHTML = h;
        $('.m').innerHTML = m;
        $('.s').innerHTML = s;
        if(d <= 0) {
          $('.day').style.display = 'none';
          if(h <= 0) {
            $('.hour').style.display = 'none';
            if(m <= 0) {
              $('.minute').style.display = 'none';
              if(s <= 0) {
                $('.count').style.display = 'none';
                  if($('.wishforTrang').style.display != "block") {
                  $('.wishforTrang').style.display = 'block';
                }
              }
            }
          }
        }
        return h;
    },
    setWidth: function () {
        if(screen.width > 1023) {
            
            $('.logo').innerHTML = `
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="1296.000000pt" height="163.000000pt" viewBox="0 0 1296.000000 163.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,163.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M4715 1246 c-154 -38 -270 -159 -282 -295 -10 -109 42 -171 145 -171
                28 0 52 -4 52 -8 0 -6 -63 -299 -95 -439 -5 -22 -3 -23 70 -23 41 0 75 1 75 3
                0 6 111 482 116 500 3 10 8 16 11 14 3 -4 123 -502 123 -514 0 -2 44 -3 98 -3
                l97 0 99 458 c54 251 101 463 104 470 3 10 -13 12 -74 10 l-78 -3 -48 -230
                c-26 -126 -53 -254 -59 -284 -7 -35 -14 -49 -18 -40 -4 8 -34 134 -67 282
                l-59 267 -35 10 c-46 13 -113 11 -175 -4z m-26 -208 c-10 -46 -26 -120 -35
                -166 -10 -50 -21 -81 -28 -79 -43 14 -55 163 -18 233 20 39 74 94 92 94 4 0
                -1 -37 -11 -82z"/>
                <path d="M5598 1247 c-112 -32 -196 -135 -205 -252 -4 -50 0 -68 20 -107 l24
                -47 -43 -27 c-87 -55 -154 -185 -154 -297 0 -68 41 -153 89 -184 142 -95 385
                -22 493 146 15 25 28 50 28 56 0 10 -50 40 -54 33 -28 -46 -45 -63 -89 -88
                -143 -82 -248 -28 -217 112 20 94 87 181 163 213 47 19 47 38 0 62 -65 34 -92
                128 -59 207 25 60 93 95 124 64 27 -27 1 -123 -35 -130 -16 -3 -14 -7 9 -31
                19 -19 37 -27 61 -27 33 0 35 -1 41 -47 10 -75 52 -113 124 -113 41 0 43 1 35
                23 -16 45 -8 160 15 204 21 41 86 103 108 103 10 0 24 -387 24 -692 l0 -118
                103 0 104 0 88 237 c49 131 93 249 99 263 8 21 11 9 17 -70 4 -52 7 -170 8
                -262 l1 -168 103 0 103 0 172 463 c94 254 172 466 172 470 0 4 -26 7 -58 7
                l-57 0 -17 -47 c-9 -27 -59 -169 -110 -318 l-93 -270 -6 70 c-4 39 -7 181 -8
                318 l-1 247 -92 0 -93 0 -110 -322 -110 -322 -6 144 c-4 80 -7 225 -8 323 l-1
                177 -68 0 c-112 0 -233 -45 -323 -121 l-47 -38 -6 34 c-8 40 -46 90 -86 110
                -41 21 -119 26 -172 12z"/>
                <path d="M8328 1247 c-112 -32 -196 -135 -205 -252 -4 -50 0 -68 20 -107 l24
                -47 -43 -27 c-87 -55 -154 -185 -154 -297 0 -68 41 -153 89 -184 142 -95 385
                -22 493 146 15 25 28 50 28 56 0 10 -50 40 -54 33 -28 -46 -45 -63 -89 -88
                -143 -82 -248 -28 -217 112 20 94 87 181 163 213 47 19 47 38 0 62 -65 34 -92
                128 -59 207 25 60 93 95 124 64 27 -27 1 -123 -35 -130 -32 -6 30 -58 69 -58
                105 0 147 161 65 248 -48 52 -137 71 -219 49z"/>
                <path d="M11271 1248 c-19 -5 -57 -24 -86 -42 -130 -84 -218 -256 -245 -480
                -13 -112 -6 -197 22 -273 41 -110 98 -147 228 -148 73 0 93 4 142 28 151 74
                261 300 275 564 8 153 -11 226 -76 294 -30 30 -60 51 -86 58 -48 13 -127 13
                -174 -1z m127 -143 c22 -63 10 -286 -21 -406 -54 -207 -142 -315 -203 -248
                -17 19 -19 37 -18 168 1 125 5 160 28 244 62 232 175 359 214 242z"/>
                <path d="M758 1239 c-121 -28 -265 -134 -308 -226 -17 -37 -21 -60 -18 -106 6
                -77 34 -108 108 -115 l52 -5 -8 34 c-24 93 14 225 77 270 17 12 32 19 34 17 2
                -2 -34 -181 -80 -398 -47 -217 -85 -396 -85 -397 0 -2 47 -3 104 -3 l105 0 11
                58 c7 31 29 134 49 227 l36 170 64 3 c35 2 67 -1 71 -5 5 -6 -54 -307 -84
                -429 l-6 -24 105 0 c100 0 105 1 110 22 3 13 46 214 95 448 49 234 92 435 95
                448 5 22 4 22 -99 22 l-105 0 -16 -72 c-8 -40 -26 -120 -38 -178 l-22 -105
                -74 -3 c-66 -3 -72 -1 -67 15 2 10 19 86 36 168 17 83 33 156 35 163 5 14
                -117 15 -177 1z"/>
                <path d="M1863 1225 c-68 -34 -183 -141 -256 -240 l-59 -80 -79 -6 c-138 -11
                -239 -81 -239 -166 0 -48 37 -83 88 -83 58 0 86 26 84 78 -2 37 1 41 30 51 17
                6 35 11 39 11 4 0 -12 -42 -36 -92 -75 -158 -108 -271 -109 -365 -1 -79 0 -84
                30 -113 24 -25 43 -33 98 -41 37 -6 70 -9 73 -6 2 3 -3 17 -13 32 -34 53 5
                265 89 475 45 113 51 118 114 101 68 -19 67 -7 18 -240 -25 -116 -45 -216 -45
                -221 0 -6 44 -10 103 -10 l103 0 64 305 c52 243 67 300 73 278 22 -73 61 -103
                132 -103 32 0 36 3 30 18 -17 38 -17 121 -1 176 33 113 131 176 272 176 53 0
                67 -4 93 -26 58 -49 64 -146 15 -254 -28 -61 -64 -104 -106 -126 -22 -11 -28
                -12 -28 -2 0 7 18 96 40 197 22 102 38 187 35 189 -2 2 -50 -2 -106 -10 l-102
                -13 -83 -385 c-46 -212 -83 -393 -84 -403 0 -16 10 -17 102 -15 l103 3 31 146
                c17 80 34 157 37 171 6 22 14 26 59 31 92 11 200 79 250 157 l16 25 26 -24
                c17 -17 41 -25 77 -29 51 -5 52 -5 43 19 -4 13 -8 56 -8 95 1 156 108 254 277
                254 78 0 111 -19 132 -75 32 -82 5 -199 -65 -279 -29 -33 -90 -75 -90 -62 0 3
                18 91 41 197 22 105 38 193 36 196 -3 2 -51 -1 -106 -8 -89 -11 -102 -16 -106
                -34 -14 -59 -165 -771 -165 -777 0 -5 46 -8 103 -8 l104 0 22 108 c12 59 29
                137 37 173 l15 66 52 6 c96 12 212 86 255 163 10 18 12 18 36 -5 18 -17 41
                -25 76 -29 l51 -5 -8 39 c-22 105 15 219 89 273 23 17 45 31 48 31 4 0 31 -96
                61 -214 l54 -213 -40 -194 -41 -194 109 -3 c60 -1 112 -1 114 2 3 3 24 92 47
                198 41 188 45 200 155 448 63 140 118 263 123 273 8 17 4 18 -52 15 l-62 -3
                -74 -180 c-41 -99 -79 -184 -83 -188 -4 -4 -25 63 -45 149 -21 86 -43 172 -48
                192 l-10 35 -86 -5 c-120 -7 -218 -48 -304 -127 l-63 -58 -25 51 c-28 56 -93
                108 -158 126 -52 14 -178 12 -237 -4 -80 -21 -173 -74 -226 -126 l-49 -49 -16
                37 c-22 55 -81 109 -141 132 -60 22 -177 27 -253 9 -105 -24 -221 -99 -281
                -182 -34 -48 -35 -43 -9 75 15 65 18 94 10 102 -6 6 -46 12 -88 14 -66 2 -85
                -1 -129 -23z m-37 -254 c-13 -62 -26 -115 -29 -117 -7 -7 -94 19 -97 29 -6 25
                140 233 147 210 2 -5 -8 -60 -21 -122z"/>
                <path d="M7548 1239 c-121 -28 -265 -134 -308 -226 -17 -37 -21 -60 -18 -106
                6 -77 34 -108 108 -115 l51 -5 -8 39 c-22 105 15 219 89 273 23 17 45 31 48
                31 4 0 31 -96 61 -214 l54 -213 -40 -194 -41 -194 109 -3 c60 -1 112 -1 114 2
                3 3 24 92 47 198 41 188 45 200 155 448 63 140 118 263 123 273 8 17 4 18 -52
                15 l-62 -3 -74 -180 c-41 -99 -79 -184 -83 -188 -4 -4 -25 63 -45 149 -21 86
                -43 172 -48 190 l-9 34 -67 -1 c-37 -1 -84 -5 -104 -10z"/>
                <path d="M9172 1230 c-24 -11 -55 -29 -70 -40 -60 -47 -165 -158 -208 -221
                l-46 -66 -81 -6 c-99 -6 -161 -31 -205 -81 -64 -73 -33 -166 57 -166 57 0 83
                24 79 72 -2 34 1 42 22 54 14 7 33 13 43 14 14 0 10 -14 -27 -87 -93 -186
                -138 -377 -106 -453 17 -41 64 -66 139 -74 l64 -7 -16 25 c-42 63 -5 265 95
                519 35 87 39 89 121 61 40 -13 46 -19 42 -37 -3 -12 -25 -113 -49 -225 l-43
                -203 105 3 105 3 34 155 c18 85 47 222 64 303 l32 148 16 -48 c18 -53 60 -83
                118 -83 l31 0 -5 73 c-7 96 13 159 67 212 22 21 42 36 45 33 3 -3 -32 -183
                -78 -399 l-84 -394 100 -3 c55 -1 102 0 105 2 3 3 24 97 48 208 24 112 46 213
                49 226 4 16 13 22 35 22 59 0 63 -47 20 -213 -38 -148 -39 -205 -4 -238 22
                -21 34 -24 92 -22 37 0 87 7 112 15 l44 14 -37 21 c-33 20 -37 27 -37 63 0 23
                11 85 24 138 13 53 27 113 30 132 8 47 -8 107 -35 136 l-22 23 33 37 c69 79
                89 178 51 252 -23 45 -42 63 -101 93 -67 34 -214 39 -307 10 -109 -33 -213
                -109 -275 -201 -14 -21 -13 -8 7 85 14 69 20 114 14 120 -6 5 -45 11 -87 13
                -60 2 -86 -2 -120 -18z m699 -99 c24 -24 29 -38 29 -77 0 -57 -30 -124 -72
                -159 -38 -33 -71 -34 -63 -2 3 12 16 73 29 135 28 129 35 120 -84 101 -92 -14
                -120 -7 -55 14 28 8 81 16 118 16 63 1 71 -1 98 -28z m-725 -57 c-4 -14 -16
                -69 -27 -122 -10 -52 -21 -97 -23 -100 -5 -4 -88 19 -99 28 -14 12 124 219
                147 220 4 0 5 -12 2 -26z"/>
                <path d="M10521 1219 c-99 -50 -147 -143 -121 -239 22 -81 88 -112 159 -76 53
                28 57 42 22 81 -24 28 -31 45 -31 79 0 98 114 121 140 28 32 -118 -9 -211
                -164 -366 -191 -191 -226 -244 -226 -346 0 -71 9 -78 66 -54 53 22 143 20 229
                -5 127 -38 210 -19 263 59 20 30 23 44 20 97 -5 85 -16 93 -67 53 -38 -31 -43
                -32 -103 -27 -174 16 -208 20 -208 26 0 12 71 75 195 174 172 137 217 203 216
                316 0 76 -24 134 -72 175 -49 41 -97 56 -186 56 -58 0 -80 -5 -132 -31z"/>
                <path d="M11816 1234 c-61 -22 -106 -62 -132 -118 -55 -118 -5 -237 95 -223
                48 6 91 34 91 58 0 11 -4 19 -10 19 -17 0 -40 57 -40 100 0 49 27 80 69 80 81
                0 104 -135 45 -253 -15 -29 -83 -109 -169 -197 -166 -173 -200 -228 -199 -323
                0 -31 4 -60 8 -64 3 -4 29 1 57 12 67 23 136 22 229 -4 95 -27 145 -27 200 1
                66 34 93 79 88 150 -2 31 -10 63 -17 72 -12 14 -16 13 -43 -9 -38 -32 -67 -39
                -131 -31 -29 4 -85 9 -125 13 l-73 6 33 35 c18 19 83 74 143 122 120 96 193
                168 221 221 14 26 19 55 19 121 0 80 -2 90 -30 130 -46 65 -118 98 -214 97
                -42 0 -94 -7 -115 -15z"/>
                <path d="M12460 1235 c-56 -18 -118 -68 -136 -111 -8 -19 -14 -53 -14 -78 0
                -108 115 -150 198 -73 l22 21 -26 21 c-35 28 -37 90 -4 117 34 27 84 23 109
                -8 28 -35 26 -69 -5 -132 -32 -64 -81 -106 -158 -134 l-59 -22 54 -23 c69 -31
                87 -47 115 -108 60 -127 -2 -285 -112 -285 -17 0 -44 10 -59 22 -25 20 -27 25
                -23 81 5 66 29 97 74 97 33 0 32 39 -2 71 -35 32 -128 34 -171 3 -44 -32 -73
                -98 -73 -169 0 -89 29 -141 100 -180 51 -28 63 -30 155 -30 93 0 105 2 167 33
                117 57 188 167 188 289 0 72 -30 135 -81 173 l-39 28 38 30 c40 32 85 106 97
                159 16 79 -56 188 -140 212 -54 15 -160 13 -215 -4z"/>
                </g>
                </svg>
            `;
        }
        else if(screen.width <= 940) {
            
            var xb = $$('.fallingLeaves span');
            for (var i = 0; i< xb.length; i++) {
                if(i%2 === 0){
                    xb[i].style.display = 'none';
                }
            }
        }
    }
    ,
    songs: [
        {
          name: "Tết Nguyên Đán",
          singer: "V.Music",
          path: "./assets/sourse/music/tet_nguyen_dan/TetNguyenDan-V.Music-1444104.mp3",
          image: "./assets/sourse/music/tet_nguyen_dan/img.jpg"
        },
        {
          name: "Chuyện Cũ Bỏ Qua",
          singer: "Bích Phương",
          path: "./assets/sourse/music/chuyen_cu_bo_qua/ChuyenCuBoQua-BichPhuong-5832993.mp3",
          image:
            "./assets/sourse/music/chuyen_cu_bo_qua/img.jfif"
        },
        {
            name: "Ngày Tết Quê Em",
            singer: "Hồ Ngọc Hà, V.Music, Minh Hằng, Thanh Hằng",
            path: "./assets/sourse/music/ngay_tet_que_em/NgayTetQueEm-HoNgocHa-VMusic-Min_3kpfq.mp3",
            image:
              "./assets/sourse/music/ngay_tet_que_em/img.jfif"
        },
        {
          name: "Tết Trong Tâm Hồn",
          singer: "Mr.T, Bùi Anh Tuấn",
          path: "./assets/sourse/music/tet_trong_tam_hon/TetTrongTamHon-Mr.TBuiAnhTuan-2427864.mp3",
          image:
            "./assets/sourse/music/tet_trong_tam_hon/img.jfif"
        },
        {
            name: "Đón Tết",
            singer: "Mắt Ngọc",
            path: "./assets/sourse/music/don_tet/DonTet-MatNgoc-1444615.mp3",
            image:
              "./assets/sourse/music/don_tet/omg.jpg"
        },
        {
            name: "Mùa Xuân Yêu Thương",
            singer: "Hồ Ngọc Hà",
            path: "./assets/sourse/music/xuan_yeu_thuong/XuanYeuThuong-NhomTheBells_3czk.mp3",
            image:
              "./assets/sourse/music/xuan_yeu_thuong/img.jfif"
        },
        {
            name: "Phố Xuân",
            singer: "Cẩm Ly",
            path: "./assets/sourse/music/pho_xuan/PhoXuan-CamLy-727816.mp3",
            image:
              "./assets/sourse/music/pho_xuan/img.jfif"
        },
        {
            name: "Tiễn Hàng Cũ, Rủ Lộc Mới Đến",
            singer: "GrabExpress",
            path: "./assets/sourse/music/tien_hang_cu_ru_loc_moi_den/TienHangCuRuLocMoiDen-GrabExpress-6920459.mp3",
            image:
              "./assets/sourse/music/tien_hang_cu_ru_loc_moi_den/img.jfif"
        },
        {
            name: "Lộc Xuân",
            singer: "Ngô Thanh Vân",
            path: "./assets/sourse/music/loc_xuan/LocXuan-NgoThanhVan_wk9.mp3",
            image:
              "./assets/sourse/music/loc_xuan/img.jfif"
        },
        {
            name: "Khúc Xuân",
            singer: "Nam Cường",
            path: "./assets/sourse/music/khuc_xuan/KhucXuan-NamCuong_3mvb4.mp3",
            image:
              "./assets/sourse/music/khuc_xuan/img.jfif"
        },
        {
            name: "Thì Thầm Mùa Xuân",
            singer: "Minh Xù",
            path: "./assets/sourse/music/thi_tham_mua_xuan/ThiThamMuaXuan-QuocMinh-2497431.mp3",
            image:
              "./assets/sourse/music/thi_tham_mua_xuan/img.jfif"
        },
        {
            name: "Xuân Họp Mặt",
            singer: "Phan Đình Tùng",
            path: "./assets/sourse/music/xuan_hop_mat/XuanHopMat-PhanDinhTung_wb9k.mp3",
            image:
              "./assets/sourse/music/xuan_hop_mat/img.jfif"
        },
        {
            name: "Xuân Yêu Thương",
            singer: "The Bells",
            path: "./assets/sourse/music/xuan_yeu_thuong/XuanYeuThuong-NhomTheBells_3czk.mp3",
            image:
              "./assets/sourse/music/xuan_yeu_thuong/img.jfif"
        },
        {
            name: "Tết Xuân",
            singer: "Phương Linh, Hà Anh Tuấn, Lưu Hương Giang, Hồ Hoài Anh",
            path: "./assets/sourse/music/tet_xuan/TetXuan-QuangVinhV.A-2482410.mp3",
            image:
              "./assets/sourse/music/tet_xuan/img.jfif"
        },
        {
            name: "Xuân Bên Em",
            singer: "Hoàng Hải, LK",
            path: "./assets/sourse/music/xuan_ben_em/XuanBenEm-HoangHai-LK_pv6f.mp3",
            image:
              "./assets/sourse/music/xuan_ben_em/img.jfif"
        },
        {
            name: "Yêu Xuân Yêu Em",
            singer: "MTV",
            path: "./assets/sourse/music/yeu_xuan_yeu_em/YeuXuanYeuEm-MTV_3mcy8.mp3",
            image:
              "./assets/sourse/music/yeu_xuan_yeu_em/img.jfif"
        },
        {
            name: "Mùa Xuân Vui",
            singer: "Quách Tuấn Du, Hà Thái Hoàng",
            path: "./assets/sourse/music/mua_xuan_vui/MuaXuanVui-QuachTuanDu-HaThaiHoan_3m5n3.mp3",
            image:
              "./assets/sourse/music/mua_xuan_vui/img.jfif"
        },
        {
            name: "Đoản Ca Xuân",
            singer: "Quang Vinh, Don Nguyễn, Liêu Hưng",
            path: "./assets/sourse/music/doan_ca_xuan/DoanCaXuan-QuangVinh-DonNguyen-Li_we48.mp3",
            image:
              "./assets/sourse/music/doan_ca_xuan/img.jfif"
        },
        {
            name: "Mùa Xuân Tình Yêu",
            singer: "M4U, VK",
            path: "./assets/sourse/music/mua_xuan_tinh_yeu/MuaXuanTinhYeu-M4U-VK_p8dt.mp3",
            image:
              "./assets/sourse/music/mua_xuan_tinh_yeu/img.jfif"
        },
        {
            name: "Ngày Xuân Long Phụng Sum Vầy Remix",
            singer: "All Vpop Stars",
            path: "./assets/sourse/music/ngay_xuan_long_phung_xum_vay/NgayXuanLongPhungSumVayRemix-All_vf8q.mp3",
            image:
              "./assets/sourse/music/ngay_xuan_long_phung_xum_vay/img.jfif"
        },
        {
            name: "Khúc Xuân Yêu Đời",
            singer: "Trung Quân, Phương Anh, Đăng Khoa",
            path: "./assets/sourse/music/khuc_xuan_yeu_doi/KhucXuanYeuDoi-PhuongAnhIdol-Trung_vuuy.mp3",
            image:
              "./assets/sourse/music/khuc_xuan_yeu_doi/img.jfif"
        },
        {
            name: "Xuân Phát Tài",
            singer: "BOT",
            path: "./assets/sourse/music/xuan_phat_tai/XuanPhatTai-BOT_3k3gv.mp3",
            image:
              "./assets/sourse/music/xuan_phat_tai/img.jfif"
        },
        {
            name: "Lắng Nghe Mùa Xuân Về",
            singer: "Hồng Nhung, Bằng Kiều",
            path: "./assets/sourse/music/lang_nghe_mua_xuan_ve/LangNgheMuaXuanVe-HongNhungBangKieu-649294.mp3",
            image:
              "./assets/sourse/music/lang_nghe_mua_xuan_ve/img.jfif"
        },
        {
            name: "Hello Mùa Xuân",
            singer: "Kiến Thành, Hồ Quang Hiếu",
            path: "./assets/sourse/music/hello_mua_xuan/HelloMuaXuan-KienThanh-HoQuangHieu_3mm3k.mp3",
            image:
              "./assets/sourse/music/hello_mua_xuan/img.jfif"
        },
        {
            name: "LK Lời Tỏ Tình Mùa Xuân",
            singer: "Hoàng Châu, Khánh Đăng, Lưu Gia Bảo",
            path: "./assets/sourse/music/loi_to_tinh_mua_xuan/LoiToTinhCuaMuaXuan-HoangChau-2612771.mp3",
            image:
              "./assets/sourse/music/loi_to_tinh_mua_xuan/img.jfif"
        },
        {
            name: "Happy New Year",
            singer: "Rock Sài Gòn Band",
            path: "./assets/sourse/music/happy_new_year/HappyNewYear-RockSaiGonBand_we2f.mp3",
            image:
              "./assets/sourse/music/happy_new_year/img.jfif"
        },
        {
            name: "Khúc Ca Mùa Xuân",
            singer: "Blue Duy Linh",
            path: "./assets/sourse/music/khuc_ca_mua_xuan/KhucCaMuaXuan-BlueDuyLinh-2497334.mp3",
            image:
              "./assets/sourse/music/khuc_ca_mua_xuan/img.jfif"
        },
    
      ],
    zodiacs: [
      {
        name: "Mão",
        nickname: "Welcome to 2023 🎋",
        wish: "Happy New Year, <br> Quynh Trang",
        image:
          "./assets/sourse/12_con_giap/mao.jfif"
      },
      {
        name: "Thìn",
        nickname: "Trang thành công 🕴️",
        wish: "Năm mới thành công, đạt được những dự định của bản thân. ",
        image:
          "./assets/sourse/12_con_giap/thin.jpg"
      },
      {
        name: "Tỵ",
        nickname: "Trang dẻo dai",
        wish: "Dẻo dai, khéo léo vượt qua mọi thử thách trong năm mới!",
        image:
          "./assets/sourse/12_con_giap/ti.jpg"
      },
      {
        name: "Ngọ",
        nickname: "Trang nhanh nhẹn 🏃",
        wish: "Làm gì cũng nhanh nhưng chắc chắn",
        image:
          "./assets/sourse/12_con_giap/ngo.jpg"
      },
      {
        name: "Mùi",
        nickname: "Trang hạnh phúc 😊",
        wish: "Năm mới có nhiều điều khiến Trang luôn hạnh phúc",
        image:
          "./assets/sourse/12_con_giap/mui.jpg"
      },
      {
        name: "Thân",
        nickname: "Trang thông minh 🤓",
        wish: "Năm mới càng học càng giỏi hơn!",
        image:
          "./assets/sourse/12_con_giap/than.jpg"
      },
      {
        name: "Dậu",
        nickname: "Trang xinh xắn 👩",
        wish: "Siêu xinh hơn năm cũ luôn",
        image:
          "./assets/sourse/12_con_giap/dau.jpg"
      },
      {
        name: "Tuất",
        nickname: "Trang may mắn 🍀",
        wish: "Năm mới có nhiều may mắn!",
        image:
          "./assets/sourse/12_con_giap/tuat.jpg"
      },
      {
        name: "Hợi",
        nickname: "Trang dễ thương 👼",
        wish: "❤️❤️❤️❤️❤️❤️❤️",
        image:
          "./assets/sourse/12_con_giap/hoi.jpg"
      },
      {
        name: "Tý",
        nickname: "Trang thủ khoa 🎓",
        wish: "Đậu Đại Học, Thủ Khoa <br> 'UEB'",
        image:
          "./assets/sourse/12_con_giap/ty.jpg"
      },
      {
        name: "Sửu",
        nickname: "Trang khỏe mạnh 💪",
        wish: "Năm mới sức khỏe đầy mình",
        image:
          "./assets/sourse/12_con_giap/suu.jpg"
      },
      {
        name: "Dần",
        nickname: "Trang hiền khô à 👻",
        wish: "Năm mới ít thức khuya hơn 🛌 <br> <a href = 'firework.html'>Tiếp Theo</a>🎇",
        image:
          "./assets/sourse/12_con_giap/dan.jpg"
      },

    ],
    renderZodiac: function() {
      const htmls = this.zodiacs.map((zodiac) => {
      return `

      <div class="slide swiper-slide">
      <img src="${zodiac.image}" alt="" class="image" />
      <p>
        ${zodiac.wish}
      </p>

      <i class="bx bxs-quote-alt-left quote-icon"></i>

      <div class="details">
        <span class="name">${zodiac.name}</span>
        <span class="nickname">${zodiac.nickname}</span>
      </div>
    </div>
         `;
    });
    listZodiac.innerHTML = htmls.join("");
    }
    ,

    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: {},
    setConfig: function (key, value) {
        this.config[key] = value;
        // (2/2) Uncomment the line below to use localStorage
        // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    render: function () {
        const htmls = this.songs.map((song, index) => {
            var songName  = song.name + "- " + song.singer;
            if(songName.length >= 31) {
                songName = songName.slice(0, 32) + "...";
            }

          return `
    
                    <div class="list__item_music ${
                      index === this.currentIndex ? "active_song" : ""
                          }" title = "${songName +"- "+ song.singer}" " data-index="${index}"
                    }>
                        <div class="img_music"
                        style = "background-image: url('${song.image}')"
                        >
                            
                        </div>
                        <div class="name_music">${songName}</div>
                        <div class="status_music music_play"></div>
                    </div>
                        `;
        });
        playList.innerHTML = htmls.join("");
      },
      defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
          get: function () {
            return this.songs[this.currentIndex];
          }
        });
    },
    checkStatus: function () {
      if (this.isPlaying) {
        audio.play();
        $('.play__song img').setAttribute("src", "./assets/sourse/pause-button.png");
          btnPlay.src = "./assets/sourse/pause-button.png";
      } else {
        audio.pause();
        $('.play__song img').setAttribute("src", "./assets/sourse/play.png");
          btnPlay.src = "./assets/sourse/play.png";
        
      }
    },
    loadConfig: function () {
      this.isRandom = this.config.isRandom;
      this.isRepeat = this.config.isRepeat;
    },
    loadCurrentSong: function () {
      audio.pause();
      audio = new Audio(`${this.currentSong.path}`);
      this.handleEvents();
    },
    playRandomSong: function () {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * this.songs.length);
      } while (newIndex === this.currentIndex);
  
      this.currentIndex = newIndex;
      this.loadCurrentSong();
    }
    ,
    nextSong: function () {
      this.currentIndex++;
      if (this.currentIndex >= this.songs.length) {
        this.currentIndex = 0;
      }
      this.loadCurrentSong();
    },
    prevSong: function () {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.songs.length - 1;
      }
      this.loadCurrentSong();
    },
    handleEvents: function () {
      
      setInterval(this.newYear, 1000);
      
      
      const _this = this;
      function loadSong() {
        if (_this.isPlaying) {
          audio.pause();
          $('.play__song img').setAttribute("src", "./assets/sourse/play.png");
          btnPlay.src = "./assets/sourse/play.png";
            _this.isPlaying = false;
        } else {
          audio.play();
          $('.play__song img').setAttribute("src", "./assets/sourse/pause-button.png");
          btnPlay.src = "./assets/sourse/pause-button.png";
          _this.isPlaying = true;
        }
      }
      (playBtn).onclick = loadSong;
      btnPlay.onclick = loadSong;
      audio.ontimeupdate = function () {
        if (audio.duration) {
          const progressPercent = Math.floor(
            (audio.currentTime / audio.duration) * 100
          );
          progress.value = progressPercent;
        }
      };
      progress.onchange = function (e) {
        const seekTime = (audio.duration / 100) * e.target.value;
        audio.currentTime = seekTime;
      };
      nextBtn.onclick = function () {
        if (_this.isRandom) {
          _this.playRandomSong();
        } else {
          _this.nextSong();
        }
        audio.play();
        _this.render();
      };
      prevBtn.onclick = function () {
        if (_this.isRandom) {
          _this.playRandomSong();
        } else {
          _this.prevSong();
        }
        audio.play();
        _this.render();
      };
      randomBtn.onclick = function (e) {
        _this.isRandom = !_this.isRandom;
        _this.setConfig("isRandom", _this.isRandom);
        randomBtn.classList.toggle("active", _this.isRandom);
        
      };
      repeatBtn.onclick = function (e) {
        _this.isRepeat = !_this.isRepeat;
        _this.setConfig("isRepeat", _this.isRepeat);
        repeatBtn.classList.toggle("active", _this.isRepeat);
      };
      audio.onended = function () {
        if (_this.isRepeat) {
          audio.play();
        } else {
          nextBtn.click();
          _this.render();
        }
      };
      playlist.onclick = function (e) {
        const songNode = e.target.closest(".song:not(.active_song)");
  
        if (songNode || e.target.closest(".option")) {
          // Xử lý khi click vào song
          // Handle when clicking on the song
          if (songNode) {
            _this.currentIndex = Number(songNode.dataset.index);
            _this.loadCurrentSong();
            _this.render();
            audio.play();
          }
  
          // Xử lý khi click vào song option
          // Handle when clicking on the song option
          if (e.target.closest(".option")) {
          }
        }
      };
      btnList.onclick = function() {
        closeList.style.display = "block";
        $('.x_music').style.animation = "none";
        $('.x_music').style.transform = "translateX(0px)";
        btnPlay.style.display = "none";
        btnList.style.display = "none";
      }
      
      closeList.onclick = function() {
        $('.x_music').style.animation = "transform_close 0.3s linear forwards";
        setTimeout(function(){
          (closeList).style.display = "none";
        }, 400)
        btnPlay.style.display = "block";
        btnList.style.display = "block";
        if(app.isPlaying){
          btnPlay.src = "./assets/sourse/pause-button.png";
        }else {
          btnPlay.src = "./assets/sourse/play.png";
        }
        
      }
      playList.onclick = function (e) {
        const songNode = e.target.closest(".list__item_music:not(.active)");
        if (songNode) {
          
          if (songNode) {
            _this.currentIndex = Number(songNode.dataset.index);
            _this.loadCurrentSong();
            _this.render();
            app.checkStatus();
            
          }
        }
      };
      
    },

    start: function() {
        this.setWidth();
        this.renderZodiac();
        this.loadConfig();
        this.checkStatus();
        this.defineProperties();
        this.handleEvents();
        
        this.render();
    }
}

app.start();
