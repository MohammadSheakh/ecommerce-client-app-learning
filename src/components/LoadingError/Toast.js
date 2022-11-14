import React from "react";
import { ToastContainer } from "react-toastify";
function Toast() {
    return (
        <div>
            <ToastContainer
                position="top-right"
                hideProgressBar={false}
                newestonTop={false}
                closeOnClick
                rtl={false}
            />
            {/* Same as */}
        </div>
    );
}
export default Toast;
