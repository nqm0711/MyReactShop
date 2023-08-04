import DirectoryItem from '../directory-item/directory-item.component';

import {DirectoryContainer} from './directory.styles';

const categories = [
    {
        "id": 1,
        "name": "Rau - Củ - Trái Cây",
        "image": `"https://cdn-crownx.winmart.vn/images/prod/kdol%2030.09.21-04%20(1)_a6e4bbc1-fd87-4c1a-b18f-09d41de0ed4d.png"`,
        "route": "shop/rau%20-%20củ%20-%20trái%20cây"
    },
    {
        "id": 2,
        "name": "Thịt - Trứng - Hải Sản",
        "image": "https://cdn-crownx.winmart.vn/images/prod/th%E1%BB%8Bt%20-%20tr%E1%BB%A9ng%20-%20h%E1%BA%A3i%20s%E1%BA%A3n_916e4711-dffd-4d1d-b977-2f9bcf6a5d17.png",
        "route": "shop/thịt%20-%20trứng%20-%20hải%20sản"
    },
    {
        "id": 3,
        "name": "Thực Phẩm Chế Biến",
        "image": "https://cdn-crownx.winmart.vn/images/prod/th%E1%BB%B1c%20ph%E1%BA%A9m%20ch%E1%BA%BF%20bi%E1%BA%BFn_003cfe93-8efe-4e32-b9ae-c4bfeb483eb3.png",
        "route": "shop/thực%20phẩm%20chế%20biến"
    },
    {
        "id": 4,
        "name": "Thực Phẩm Khô - Gia Vị",
        "image": "https://cdn-crownx.winmart.vn/images/prod/th%E1%BB%B1c%20ph%E1%BA%A9m%20kh%C3%B4%20-%20gia%20v%E1%BB%8B_0c43974c-8eb0-47f3-b2a0-2b5300d3aacf.png",
        "route": "shop/thực%20phẩm%20khô%20-%20gia%20vị"
    },
    {
        "id": 5,
        "name": "Bánh Kẹo - Đồ Ăn Vặt",
        "image": "https://cdn-crownx.winmart.vn/images/prod/kdol%2030.09.21-09_f1ef81bc-6d5b-4fa3-a5c1-99e8b6fa09cf.png",
        "route": "shop/bánh%20kẹo%20-%20đồ%20ăn%20vặt"
    },
    {
        "id": 6,
        "name": "Sữa - Sản Phẩm Từ Sữa",
        "image": "https://cdn-crownx.winmart.vn/images/prod/kdol%2030.09.21-10_d993359f-2044-45d7-875b-41ada3fa5c16.png",
        "route": "shop/sữa%20-%20sản%20phẩm%20từ%20sữa"
    },
    {
        "id": 7,
        "name": "Đồ Uống - Giải Khát",
        "image": "https://cdn-crownx.winmart.vn/images/prod/%C4%91%E1%BB%93%20u%E1%BB%91ng%20-%20gi%E1%BA%A3i%20kh%C3%A1t_d8ef6eb1-2fc9-474e-9af5-fc979347922a.png",
        "route": "shop/đồ%20uống%20-%20giải%20khát"
    },
    {
        "id": 8,
        "name": "Hóa Mỹ Phẩm",
        "image": "https://cdn-crownx.winmart.vn/images/prod/kdol%2030.09.21-12_b3cb37e4-8a4c-41b7-9852-dfd2a6e1ec1b.png",
        "route": "shop/hóa%20mỹ%20phẩm"
    },
    {
        "id": 9,
        "name": "Chăm Sóc Cá Nhân",
        "image": "https://cdn-crownx.winmart.vn/images/prod/ch%C4%83m%20s%C3%B3c%20c%C3%A1%20nh%C3%A2n_1788928f-7a82-4447-a977-ef364f2c7c3c.png",
        "route": "shop/chăm%20sóc%20cá%20nhân"
    }
];

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category}/>
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
