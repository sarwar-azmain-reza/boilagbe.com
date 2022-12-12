import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const ReportModal = ({reportedProduct,setReportedProduct,user}) => {

    const {productName,_id} = reportedProduct;

    const [loading,setLoading] = useState(false);

    const handleReport = event =>{
        event.preventDefault();
        const reportReason = event.target.reason.value;
        // console.log(reportReason,_id);
        const report = {
            reportReason,
            reportedBy:user.displayName
        }
        console.log(report);
        setLoading(true);
        fetch(`https://boilagbe-com-server.vercel.app/products/report/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${localStorage.getItem('boilagbeToken')}`
            },
            body: JSON.stringify(report)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
                if (data.acknowledged) {
                    setLoading(false);
                    setReportedProduct(null);
                    toast.success('Reported To Admin Successfully.');
                }
            })
    }
    return (
        <>
        <input type="checkbox" id="reportModal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="reportModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{productName}</h3>
                <form onSubmit={handleReport}>
                    <div className="form-control mt-2 grid grid-cols-1 gap-3">
                        <input type="text" name='reason' placeholder="Reason Of Report" className="input input-bordered input-sm w-full focus:outline-none " required />
                        <div>
                            <button className={`w-full btn btn-info btn-sm text-white ${loading ? 'loading' : ''}`}>Report</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </>
    );
};

export default ReportModal;