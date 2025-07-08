import { useContext,useState } from 'react';
import { AuthContext } from '../CartContext';
import { X } from 'lucide-react';
import CheckoutModal from "./CheckoutModal";

const Cart = () => {

    const { cartItems, updateQuantity, totalPrice, isCartOpen, toggleCart } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-lg font-bold">Your Cart</h2>
                    <button onClick={toggleCart}>
                        <X />
                    </button>
                </div>

                <div className="p-4 overflow-y-auto h-[calc(100%-150px)]">
                    {cartItems.length === 0 ? (
                        <p className="text-gray-500">Cart is empty</p>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item._id}
                                className="flex justify-between items-center mb-4 border-b pb-2"
                            >
                                <div>
                                    <h4 className="font-semibold">{item.title}</h4>
                                    <p className="text-sm">
                                        ${item.price} x {item.quantity}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button className="btn btn-xs" onClick={() => updateQuantity(item._id, -1)}>
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button className="btn btn-xs" onClick={() => updateQuantity(item._id, 1)}>
                                        +
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-4 border-t">
                    <p className="font-bold mb-2">Total: ${totalPrice.toFixed(2)}</p>
                    {/* <button className="btn btn-success w-full">Checkout</button>  */}

                    <button className="btn btn-success w-full mt-2" onClick={() => {
                        setShowModal(true);
                        toggleCart(); // hide cart
                    }}
                    > Checkout
                    </button>
                </div>
            </div>
            <CheckoutModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </>

    );
};

export default Cart;


