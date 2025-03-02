import { Button } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import errors from "../../assets/error";

const NotFoundPage: FC = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-y-4 text-center">
                <img className="w-[200px] h-[200px] object-cover" src={errors.error404} alt="404 Not Found" />
                <h1 className="text-3xl font-bold text-gray-800">Không tìm thấy trang</h1>
                <p className="text-lg text-gray-600 max-w-md">
                    Trang bạn đang tìm kiếm có thể đã bị xóa, bị đổi tên hoặc hiện không khả dụng.
                </p>
                <Link to="/">
                    <Button size="large" type="primary">Đi tới bản tin</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
