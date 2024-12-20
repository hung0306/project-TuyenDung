import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { EditOutlined, UserAddOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import "./MenuIn4User.scss";

function MenuIn4User() {
  // Sử dụng state để theo dõi trạng thái mở của menu
  const [openKeys, setOpenKeys] = useState([]);

  // Hàm xử lý sự kiện khi mở/đóng các mục menu
  const onOpenChange = (keys) => {
    setOpenKeys(keys); // Cập nhật trạng thái các mục đang mở
  };

  // Hàm xử lý khi nhấp vào một mục Link
  const handleClick = () => {
    setOpenKeys([]); // Đóng menu sau khi nhấp vào mục
  };

  const items = [
    {
      key: '1',
      label: <div style={{ fontWeight: "bold" }}>Quản lý tài khoản</div>,
      children: [
        {
          key: '2',
          label: (
            <Link to="/profile" onClick={handleClick}>
              <EditOutlined style={{ color: 'green', marginRight: '8px' }} />
              <span style={{ color: 'black' }}>Thông tin cá nhân</span>
            </Link>
          ),
          type: 'group',
        },
        {
          key: '3',
          label: (
            <Link to="/create-CV1" onClick={handleClick}>
              <UserAddOutlined style={{ color: 'green', marginRight: '8px' }} />
              <span style={{ color: 'black' }}>Tạo CV mới</span>
            </Link>
          ),
          type: 'group',
        },
        {
          key: '4',
          label: (
            <Link to="/manager-Cv-user" onClick={handleClick}>
              <MenuOutlined style={{ color: 'green', marginRight: '8px' }} />
              <span style={{ color: 'black' }}>Quản lý CV của bạn</span>
            </Link>
          ),
          type: 'group',
        },
      ],
    },
  ];

  return (
    <Menu
      style={{ margin: "10px 0px" }}
      mode="inline"
      items={items}
      openKeys={openKeys}
      onOpenChange={onOpenChange} // Gán sự kiện thay đổi trạng thái mở
    />
  );
}

export default MenuIn4User;
