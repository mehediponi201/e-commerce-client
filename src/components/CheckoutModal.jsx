
const CheckoutModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Hide if not open

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;

        console.log('Order Placed:', { name, email, address });
        alert('✅ Order Placed Successfully!');
        onClose(); // Close modal after submit
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-md w-80 relative">
                <button className="absolute top-2 right-2 text-xl font-bold" onClick={onClose}>
                    ✕
                </button>
                <h2 className="text-lg font-bold mb-4">Confirm Your Order</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
                    <input type="text" name="address" placeholder="Address" className="input input-bordered w-full" required />
                    <button className="btn btn-primary w-full" type="submit">
                        Submit Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutModal;
