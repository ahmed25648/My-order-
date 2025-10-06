
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// --- ICONS ---
const CameraIcon = () => (
    <svg className="icon" viewBox="0 0 24 24"><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-10c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2-2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12z"></path></svg>
);
const SearchIcon = () => (
    <svg className="icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
);
const HistoryIcon = () => (
    <svg className="icon" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8H12z"></path></svg>
);
const TrashIcon = () => (
    <svg className="icon" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
);
const AddUserIcon = () => (
    <svg className="icon" viewBox="0 0 24 24"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
);
const BackIcon = () => (
    <svg className="icon" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
);
const AddIcon = () => (
    <svg className="icon" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
);
const EditIcon = () => (
    <svg className="icon" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
);
const ShareIcon = () => (
    <svg className="icon" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"></path></svg>
);
const LinkIcon = () => (
    <svg className="icon" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>
);
const DotsIcon = () => (
    <svg className="icon" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
);
const BellIcon = () => (
    <svg className="icon" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.21 1.79-4 4-4s4 1.79 4 4v6z"></path></svg>
);


// --- TYPES ---
interface Order {
    id: number;
    price: number;
    discount: number;
    code: string;
    note: string;
    reminder?: string;
    animationState?: 'new' | 'deleting';
}

interface Customer {
    id: number;
    name: string;
    createdAt: string;
    orders: Order[];
    color: string;
    animationState?: 'new' | 'deleting';
}

interface UserProfile {
    name: string;
    picture: string;
}

// --- HELPERS ---
const colors = ['#3b82f6', '#ef4444', '#22c55e', '#eab308', '#8b5cf6', '#ec4899', '#f97316', '#14b8a6'];
const getColorForName = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash % colors.length)];
};


// --- COMPONENTS ---

// FIX: Explicitly type props for UndoToast as a React.FC to allow the 'key' prop.
const UndoToast: React.FC<{ action: any; onClear: () => void; }> = ({ action, onClear }) => {
    useEffect(() => {
        if (!action) return;

        const timerId = setTimeout(() => {
            action.onFinalize();
            onClear();
        }, 5000); // 5 seconds to undo

        return () => clearTimeout(timerId);
    }, [action, onClear]);

    if (!action) return null;

    const handleUndo = () => {
        action.onUndo();
        onClear(); // This will also trigger the useEffect cleanup, clearing the timer
    };

    return (
        <div className="undo-toast visible">
            <span className="undo-message">{action.message}</span>
            <button onClick={handleUndo} className="btn-undo">
                تراجع
            </button>
        </div>
    );
};


const AutoCompleteInput = ({ value, onChange, name, placeholder, suggestions, className = '' }) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleChange = (e) => {
        const userInput = e.target.value;
        onChange(e); 

        if (userInput.length > 0) {
            const filtered = suggestions.filter(
                suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
            );
            setFilteredSuggestions(filtered);
            setShowSuggestions(filtered.length > 0);
        } else {
            setShowSuggestions(false);
        }
    };

    const onClick = (suggestion) => {
        const fakeEvent = { target: { name, value: suggestion } };
        onChange(fakeEvent);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
    };

    return (
        <div className="autocomplete-wrapper" ref={wrapperRef}>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className={className}
                autoComplete="off"
            />
            {showSuggestions && (
                <ul className="autocomplete-suggestions">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li key={index} className="suggestion-item" onClick={() => onClick(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


const SideMenu = ({ isOpen, onClose, userProfile }) => (
    <>
        <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
        <nav className={`side-menu ${isOpen ? 'open' : ''}`}>
            {userProfile && (
                 <div className="side-menu-profile">
                    <div className="profile-picture-border-wrapper">
                        <div className="profile-picture" style={{ backgroundImage: `url(${userProfile.picture})` }}></div>
                    </div>
                    <h3 className="side-menu-username">{userProfile.name}</h3>
                </div>
            )}
            <div className="menu-items-group">
                <a href="#" className="menu-item">
                    <HistoryIcon />
                    <span>سجل العملاء</span>
                </a>
            </div>
        </nav>
    </>
);

const CustomerListPage = ({ customers, onAddCustomer, onDeleteCustomer, onSelectCustomer }) => {
    const [customerName, setCustomerName] = useState('');

    const handleAddClick = () => {
        if (customerName.trim()) {
            onAddCustomer(customerName.trim());
            setCustomerName('');
        }
    };

    return (
        <main className="main-content">
            <div className="search-bar-wrapper">
                <div className="input-wrapper">
                    <SearchIcon />
                    <input type="text" placeholder="ابحث عن عميل..." />
                </div>
            </div>

            <div className="add-customer-container">
                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="اسم العميل"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleAddClick()}
                    />
                </div>
                <button className="btn-icon btn-add-customer" onClick={handleAddClick} aria-label="إضافة عميل">
                    <AddIcon />
                </button>
            </div>

            <div className="customer-list">
                 {customers.length === 0 ? (
                    <div className="empty-list-placeholder">
                        <AddUserIcon />
                        <p>لم يتم إضافة أي عملاء بعد.</p>
                        <span>ابدأ بإضافة عميل جديد من الأعلى.</span>
                    </div>
                ) : (
                    customers.map(customer => {
                        const color = customer.color;
                        const firstLetter = customer.name.charAt(0).toUpperCase();
                        return (
                            <div key={customer.id} className={`customer-card ${customer.animationState === 'new' ? 'item-enter' : ''} ${customer.animationState === 'deleting' ? 'item-exit' : ''}`} onClick={() => { onSelectCustomer(customer); }} style={{ borderRightColor: color }}>
                                <div className="customer-avatar" style={{ backgroundColor: color }}>
                                    {firstLetter}
                                </div>
                                <div className="customer-info">
                                    <h3>{customer.name}</h3>
                                    <span>{customer.createdAt}</span>
                                </div>
                                <button className="btn-icon" onClick={(e) => { e.stopPropagation(); onDeleteCustomer(customer.id); }} aria-label={`حذف ${customer.name}`}>
                                    <TrashIcon />
                                </button>
                            </div>
                        )
                    })
                )}
            </div>
        </main>
    );
};

const EditCustomerModal = ({ customer, onSave, onClose }) => {
    const [name, setName] = useState(customer.name);
    const [color, setColor] = useState(customer.color);

    const handleSave = () => {
        if (name.trim()) {
            onSave({ ...customer, name: name.trim(), color });
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>تعديل العميل</h2>
                <input
                    type="text"
                    placeholder="اسم العميل"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="modal-input"
                    autoFocus
                />
                <div className="color-picker">
                    <p>اختر لونًا:</p>
                    <div className="color-options">
                        {colors.map(c => (
                            <div
                                key={c}
                                className={`color-option ${color === c ? 'selected' : ''}`}
                                style={{ backgroundColor: c }}
                                onClick={() => setColor(c)}
                            />
                        ))}
                    </div>
                </div>
                <div className="modal-actions">
                    <button onClick={onClose} className="btn btn-secondary">إلغاء</button>
                    <button onClick={handleSave} className="btn btn-blue">حفظ التغييرات</button>
                </div>
            </div>
        </div>
    );
};


const EditOrderModal = ({ orderToEdit, onSave, onClose, allCodes, allNotes }) => {
    const [order, setOrder] = useState({...orderToEdit});
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder(prev => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = () => {
        setError('');
        const price = parseFloat(order.price as any);
        const discount = parseFloat(order.discount as any);

        const finalPrice = !isNaN(price) && price > 0 ? price : 0;
        const finalDiscount = !isNaN(discount) && discount > 0 ? discount : 0;

        if (finalPrice === 0 && finalDiscount === 0) {
            setError("يجب إدخال سعر أو خصم موجب.");
            return;
        }

        const updatedOrder = {
            ...order,
            price: finalPrice,
            discount: finalDiscount,
        };
        onSave(updatedOrder);
    };

    const totalAfterDiscount = (parseFloat(order.price as any) || 0) - (parseFloat(order.discount as any) || 0);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>تعديل الطلب</h2>
                <input type="number" name="price" placeholder="السعر" value={order.price} onChange={handleChange} className="modal-input" />
                <input type="number" name="discount" placeholder="الخصم" value={order.discount} onChange={handleChange} className="modal-input" />
                <AutoCompleteInput name="code" placeholder="الكود (اختياري)" value={order.code} onChange={handleChange} suggestions={allCodes} className="modal-input" />
                <AutoCompleteInput name="note" placeholder="الملاحظة (اختياري)" value={order.note} onChange={handleChange} suggestions={allNotes} className="modal-input" />
                {error && <p className="error-message">{error}</p>}
                <div className="modal-total">
                    الإجمالي بعد الخصم: <span>{totalAfterDiscount.toFixed(2)}</span>
                </div>
                <div className="modal-actions">
                    <button onClick={onClose} className="btn btn-secondary">إلغاء</button>
                    <button onClick={handleSubmit} className="btn btn-blue">حفظ التغييرات</button>
                </div>
            </div>
        </div>
    );
};


const CustomerDetailPage = ({ customer, onUpdateCustomer, allCodes, allNotes }) => {
    const [order, setOrder] = useState({ price: '', discount: '', code: '', note: '' });
    const [error, setError] = useState<string>('');
    const [editingOrder, setEditingOrder] = useState<Order | null>(null);
    const [isActionsMenuOpen, setActionsMenuOpen] = useState(false);
    const [isEditCustomerModalOpen, setEditCustomerModalOpen] = useState(false);
    const [orderUndoAction, setOrderUndoAction] = useState(null);
    const [orderToDelete, setOrderToDelete] = useState<number | null>(null);
    const [isFormVisible, setIsFormVisible] = useState(true);

    const customerRef = useRef(customer);
    const scrollContainerRef = useRef<HTMLElement>(null);
    const lastScrollY = useRef(0);
    
    useEffect(() => {
        customerRef.current = customer;
    }, [customer]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const currentScrollY = container.scrollTop;

            // Threshold to start hiding the form
            const scrollThreshold = 100;

            // Always show form when near the top
            if (currentScrollY < scrollThreshold) {
                setIsFormVisible(true);
            } else {
                // Hide on scroll down, show on scroll up
                if (currentScrollY > lastScrollY.current) {
                    setIsFormVisible(false);
                } else {
                    setIsFormVisible(true);
                }
            }
            
            lastScrollY.current = Math.max(0, currentScrollY);
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder(prev => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleAddOrder = () => {
        setError('');
        const price = parseFloat(order.price);
        const discount = parseFloat(order.discount);

        const finalPrice = !isNaN(price) && price > 0 ? price : 0;
        const finalDiscount = !isNaN(discount) && discount > 0 ? discount : 0;

        if (finalPrice === 0 && finalDiscount === 0) {
            setError("يجب إدخال سعر أو خصم موجب.");
            return;
        }

        const newOrder: Order = {
            id: Date.now(),
            price: finalPrice,
            discount: finalDiscount,
            code: order.code,
            note: order.note,
            animationState: 'new',
        };
        const updatedCustomer = {
            ...customer,
            orders: [...customer.orders, newOrder],
        };
        onUpdateCustomer(updatedCustomer);
        setOrder({ price: '', discount: '', code: '', note: '' });
        
        setTimeout(() => {
            const finalCustomerState = {
                ...updatedCustomer,
                orders: updatedCustomer.orders.map(o => o.id === newOrder.id ? { ...o, animationState: undefined } : o),
            };
            onUpdateCustomer(finalCustomerState);
        }, 500);
    };

    const handleEditOrder = (updatedOrder: Order) => {
        const updatedOrders = customer.orders.map(o => o.id === updatedOrder.id ? updatedOrder : o);
        const updatedCustomer = { ...customer, orders: updatedOrders };
        onUpdateCustomer(updatedCustomer);
        setEditingOrder(null);
    };

    const startDeleteOrder = (orderId: number) => {
        if (orderUndoAction) {
            orderUndoAction.onFinalize();
        }

        const orderToDelete = customer.orders.find(o => o.id === orderId);
        if (!orderToDelete) return;

        const customerWithDeletingOrder = {
            ...customer,
            orders: customer.orders.map(o => o.id === orderId ? { ...o, animationState: 'deleting' } : o),
        };
        onUpdateCustomer(customerWithDeletingOrder);

        setOrderUndoAction({
            key: orderId,
            message: 'تم حذف الطلب.',
            onFinalize: () => {
                const latestCustomer = customerRef.current;
                const updatedOrders = latestCustomer.orders.filter(o => o.id !== orderId);
                onUpdateCustomer({ ...latestCustomer, orders: updatedOrders });
            },
            onUndo: () => {
                const latestCustomer = customerRef.current;
                const restoredOrders = latestCustomer.orders.map(o => o.id === orderId ? { ...o, animationState: undefined } : o);
                onUpdateCustomer({ ...latestCustomer, orders: restoredOrders });
            }
        });
    };

    const hasNotes = customer.orders.some(o => o.note && o.note.trim() !== '');
    const hasCodes = customer.orders.some(o => o.code && o.code.trim() !== '');

    const handleShareImage = async () => {
        setActionsMenuOpen(false);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        // Colors from CSS variables
        const padding = 20;
        const cellPadding = 12;
        const font = "16px Cairo";
        const headerFont = "bold 16px Cairo";
        const titleFont = "bold 20px Cairo";
        const signatureFont = "14px Cairo";
        const bgColor = '#1b263b';
        const textColor = '#e0e1dd';
        const headerBgColor = '#2a3b52';
        const borderColor = '#415a77';
        const greenColor = '#22c55e';
        const redColor = '#e11d48';
        const blueColor = '#3b82f6';

        // Dynamically build headers and rows
        const headers = [];
        if (hasNotes) headers.push("ملاحظة");
        if (hasCodes) headers.push("الكود");
        headers.push("الإجمالي", "الخصم", "السعر", "رقم الطلب");

        const rows = customer.orders.map((o, index) => {
            const total = o.price - o.discount;
            const rowData = [];
            if (hasNotes) rowData.push(o.note || '-');
            if (hasCodes) rowData.push(o.code || '-');
            rowData.push(
                total.toFixed(0),
                o.discount > 0 ? o.discount.toFixed(0) : '-',
                o.price.toFixed(0),
                String(index + 1)
            );
            return rowData;
        });

        ctx.font = font;
        const columnWidths = headers.map((header, i) => {
            const headerWidth = ctx.measureText(header).width;
            const dataWidths = rows.map(row => ctx.measureText(String(row[i])).width);
            return Math.max(headerWidth, ...dataWidths) + cellPadding * 2;
        });

        const tableWidth = columnWidths.reduce((a, b) => a + b, 0);
        const titleHeight = 60;
        const signatureHeight = 40;
        canvas.width = tableWidth + padding * 2;
        canvas.height = (rows.length + 1) * 45 + padding * 2 + titleHeight + signatureHeight;

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = titleFont;
        ctx.fillStyle = textColor;
        ctx.textAlign = 'center';
        ctx.fillText(`طلبات: ${customer.name}`, canvas.width / 2, padding + titleHeight / 2);

        let currentY = padding + titleHeight;

        const drawRow = (rowData, isHeader) => {
            let currentX = padding;
            rowData.forEach((cell, i) => {
                const colWidth = columnWidths[i];
                ctx.fillStyle = isHeader ? headerBgColor : bgColor;
                ctx.fillRect(currentX, currentY, colWidth, 45);
                ctx.strokeStyle = borderColor;
                ctx.strokeRect(currentX, currentY, colWidth, 45);
                
                ctx.font = isHeader ? headerFont : font;
                ctx.fillStyle = textColor; // Default color
                
                if (!isHeader) {
                    const headerName = headers[i];
                    if (headerName === 'الإجمالي') ctx.fillStyle = blueColor;
                    if (headerName === 'الخصم' && cell !== '-') ctx.fillStyle = redColor;
                    if (headerName === 'السعر') ctx.fillStyle = greenColor;
                }

                ctx.textAlign = 'right';
                ctx.textBaseline = 'middle';
                ctx.fillText(String(cell), currentX + colWidth - cellPadding, currentY + 22.5);
                currentX += colWidth;
            });
            currentY += 45;
        };
        
        drawRow(headers, true);
        rows.forEach(row => drawRow(row, false));
        
        // Signature
        ctx.font = signatureFont;
        ctx.fillStyle = textColor;
        ctx.textBaseline = 'bottom';
        
        ctx.textAlign = 'left';
        ctx.fillText("My Order", padding, canvas.height - 10);
        
        ctx.textAlign = 'right';
        ctx.fillText("AHMED ISMAEL", canvas.width - padding, canvas.height - 10);

        canvas.toBlob(async (blob) => {
            if (blob && navigator.share) {
                try {
                    const file = new File([blob], `${customer.name}_orders.png`, { type: 'image/png' });
                    await navigator.share({ title: `طلبات ${customer.name}`, files: [file] });
                } catch (error) {
                    if (error.name !== 'AbortError') {
                        console.error('Error sharing:', error);
                    }
                }
            }
        }, 'image/png');
    };

    const handleShareLink = async () => {
        setActionsMenuOpen(false);
        const shareUrl = `${window.location.origin}${window.location.pathname}#/customer/${customer.id}`;
        const shareData = {
            title: `طلبات ${customer.name}`,
            text: `عرض سجل طلبات العميل ${customer.name}`,
            url: shareUrl,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error sharing link:', error);
                }
            }
        } else {
            try {
                await navigator.clipboard.writeText(shareUrl);
                alert('تم نسخ الرابط إلى الحافظة!');
            } catch (err) {
                console.error('Failed to copy link:', err);
                alert('لا يمكن نسخ الرابط تلقائيًا.');
            }
        }
    };

    const totalAmount = customer.orders.reduce((sum, order) => sum + order.price, 0);
    const totalDiscount = customer.orders.reduce((sum, order) => sum + order.discount, 0);
    const finalTotal = totalAmount - totalDiscount;

    const date = new Date();
    const formattedDate = date.toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' });
    const weekday = date.toLocaleDateString('ar-EG', { weekday: 'long' });

    return (
        <>
            <main ref={scrollContainerRef} className="main-content customer-detail-view">
                <div className="customer-detail-header">
                    <div className="stat-card">
                         <div className="stat-info">
                            <span className="stat-label">قبل الخصم</span>
                            <span className="stat-value green">{totalAmount.toFixed(0)}</span>
                         </div>
                    </div>
                    <div className="date-card">
                        <span>{formattedDate}</span>
                        <span>{weekday}</span>
                    </div>
                    <div className="stat-card end">
                        <div className="actions-menu-wrapper">
                            <button className="btn-icon" onClick={() => setActionsMenuOpen(prev => !prev)}>
                                <DotsIcon />
                            </button>
                            {isActionsMenuOpen && (
                                <div className="dropdown-menu">
                                    <button onClick={handleShareImage}>
                                        <ShareIcon />
                                        <span>مشاركة كصورة</span>
                                    </button>
                                    <button onClick={handleShareLink}>
                                        <LinkIcon />
                                        <span>مشاركة الرابط</span>
                                    </button>
                                     <button onClick={() => { setEditCustomerModalOpen(true); setActionsMenuOpen(false); }}>
                                        <EditIcon />
                                        <span>تعديل العميل</span>
                                    </button>
                                </div>
                            )}
                        </div>
                         <div className="stat-info">
                            <span className="stat-label">بعد الخصم</span>
                            <span className="stat-value blue">{finalTotal.toFixed(0)}</span>
                        </div>
                    </div>
                </div>

                <div className={`inline-order-form ${!isFormVisible ? 'hidden' : ''}`}>
                     <div className="form-summary">
                        <span>خصم:</span>
                        <span className="summary-value">{totalDiscount.toFixed(0)}</span>
                    </div>
                    <div className="form-inputs">
                        <input type="number" name="price" placeholder="السعر" value={order.price} onChange={handleChange} className="form-input" />
                        <input type="number" name="discount" placeholder="الخصم" value={order.discount} onChange={handleChange} className="form-input" />
                        <AutoCompleteInput name="code" placeholder="الكود" value={order.code} onChange={handleChange} suggestions={allCodes} className="form-input" />
                        <AutoCompleteInput name="note" placeholder="الملاحظة" value={order.note} onChange={handleChange} suggestions={allNotes} className="form-input" />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button onClick={handleAddOrder} className="btn btn-add-order">
                        <AddIcon />
                        <span>إضافة طلب</span>
                    </button>
                </div>

                <div className="table-container">
                    {customer.orders.length === 0 ? (
                        <p className="empty-table-message">لا توجد طلبات مسجلة.</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>رقم الطلب</th>
                                    <th>السعر</th>
                                    <th>الخصم</th>
                                    <th>الإجمالي</th>
                                    {hasCodes && <th>الكود</th>}
                                    {hasNotes && <th>ملاحظة</th>}
                                    <th>الإجراء</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customer.orders.map((order, index) => {
                                    const totalAfter = order.price - order.discount;
                                    return (
                                        <tr key={order.id} className={`${order.animationState === 'new' ? 'item-enter' : ''} ${order.animationState === 'deleting' ? 'item-exit' : ''}`}>
                                            <td>{index + 1}</td>
                                            <td className="price-cell">{order.price.toFixed(0)}</td>
                                            <td className="discount-cell">
                                                {order.discount > 0 ? (
                                                    <span className="discount-tag">{order.discount.toFixed(0)}</span>
                                                ) : (
                                                    '-'
                                                )}
                                            </td>
                                            <td className="total-cell">{totalAfter.toFixed(0)}</td>
                                            {hasCodes && <td>{order.code || '-'}</td>}
                                            {hasNotes && <td>{order.note || '-'}</td>}
                                            <td className="table-actions">
                                                 <button className="btn-icon btn-table-action" onClick={() => { setEditingOrder(order); }} aria-label="تعديل الطلب">
                                                    <EditIcon />
                                                </button>
                                                <button className="btn-icon btn-table-action" onClick={() => setOrderToDelete(order.id)} aria-label="حذف الطلب">
                                                    <TrashIcon />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </main>
            {editingOrder && <EditOrderModal orderToEdit={editingOrder} onSave={handleEditOrder} onClose={() => { setEditingOrder(null); }} allCodes={allCodes} allNotes={allNotes} />}
            {isEditCustomerModalOpen && (
                <EditCustomerModal 
                    customer={customer} 
                    onSave={(updatedCustomer) => {
                        onUpdateCustomer(updatedCustomer);
                        setEditCustomerModalOpen(false);
                    }} 
                    onClose={() => { setEditCustomerModalOpen(false);}} 
                />
            )}
             <ConfirmationDialog
                isOpen={orderToDelete !== null}
                onClose={() => setOrderToDelete(null)}
                onConfirm={() => {
                    if (orderToDelete) {
                        startDeleteOrder(orderToDelete);
                    }
                    setOrderToDelete(null);
                }}
                title="تأكيد حذف الطلب"
            >
                هل أنت متأكد أنك تريد حذف هذا الطلب؟
            </ConfirmationDialog>
            <UndoToast
                key={orderUndoAction?.key}
                action={orderUndoAction}
                onClear={() => setOrderUndoAction(null)}
            />
        </>
    );
};


const ConfirmationDialog = ({ isOpen, onClose, onConfirm, title, children }: { isOpen: boolean; onClose: () => void; onConfirm: () => void; title: string; children?: React.ReactNode }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <p className="confirm-dialog-message">{children}</p>
                <div className="modal-actions">
                    <button onClick={onClose} className="btn btn-secondary">إلغاء</button>
                    <button onClick={() => { onConfirm(); }} className="btn btn-danger">تأكيد</button>
                </div>
            </div>
        </div>
    );
};

const SetupModal = ({ onSave }) => {
    const [name, setName] = useState('');
    const [picture, setPicture] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handlePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPicture(event.target?.result as string);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSave = () => {
        if (name.trim()) {
            onSave({ name: name.trim(), picture });
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content setup-modal-content">
                <h2>إعداد ملفك الشخصي</h2>
                <p>مرحبًا بك! يرجى إدخال اسمك وتحميل صورة شخصية.</p>

                <div className="image-uploader" onClick={() => fileInputRef.current?.click()}>
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handlePictureUpload} style={{ display: 'none' }} />
                    {picture ? (
                        <img src={picture} alt="Preview" className="profile-picture-preview" />
                    ) : (
                        <div className="image-uploader-placeholder">
                            <CameraIcon />
                            <span>اختر صورة</span>
                        </div>
                    )}
                </div>

                <input type="text" placeholder="اسمك" value={name} onChange={(e) => setName(e.target.value)} className="modal-input" />
                <div className="modal-actions">
                    <button onClick={handleSave} className="btn btn-blue" disabled={!name.trim()}>حفظ</button>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const [customers, setCustomers] = useState<Customer[]>(() => {
        try {
            const storedCustomers = localStorage.getItem('customers');
            return storedCustomers ? JSON.parse(storedCustomers) : [];
        } catch (error) {
            console.error("Failed to parse customers from localStorage", error);
            return [];
        }
    });

    const parseHash = () => {
        const hash = window.location.hash.slice(1); // remove '#'
        if (hash.startsWith('/customer/')) {
            const customerId = parseInt(hash.split('/')[2], 10);
            if (!isNaN(customerId)) {
                return { view: 'detail', customerId };
            }
        }
        return { view: 'list', customerId: null };
    };

    const [view, setView] = useState(parseHash());

    useEffect(() => {
        const handleHashChange = () => {
            setView(parseHash());
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const selectedCustomer = view.view === 'detail'
      ? customers.find(c => c.id === view.customerId)
      : null;

    useEffect(() => {
        if (view.view === 'detail' && customers.length > 0 && !customers.some(c => c.id === view.customerId)) {
            window.location.hash = '#/';
        }
    }, [view, customers]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const [customerUndoAction, setCustomerUndoAction] = useState(null);
    const [customerToDeleteId, setCustomerToDeleteId] = useState<number | null>(null);
    const defaultProfilePicture = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACxUlEQVR4nLVXzW/aUBD+VuN/pSPESiHESiFESqGgAokTJy7cOKlTJ07UqRNESqGgAonTJ04cqRMniJQCIZXy3vfevL693a40bXImzWR39ve+9733SyzLLhOmyq4rGgBCbQGgNIoLeKbvP/Z2v/79N47jT5yS+fNf/uAARwA87h+vYDTmD41G40dZlj8KBAJnB7hHIOAbAPIB4PGr1WpL0zS/2u12VZZl323btjUajS+FQqG32Wz+4vj4eG9vb+/5fL5vAORLSUQAfMbv938wGAz+sCzrLwRB8Hq9/pRSMgD+5uTkpPfv3/+D1+v9AUBTUg4A3MfHx4+cnJy8gJRSBQD8u7u7+7e7u/s1pRSBQPz19fU3ubm5HwE4D8BfAWAWQGgUf5IkyW02m3tJSYIgaDabonwf4EMAPgVgCgAdAL8F4EohkDTNK7Zt+w4A4m8AsAOAi0IglUqlP4qi7AZgG/ADAEaFEAghLpfLP4vF4mEA/gbgSQA+CiG8Xq/f27Z9hN/v/zYQCPwM4I0A/CiE8Hg8/jEMw2/7/f4XAPD9/f0fR0dHXwA4D6BfA+AXAL4F4P2WZb9ta9tWpVLp5fP5VwDkg3A3AJcC8K1Sqfw4DMMbAPD5+fnv7e3t/Q+APwF4z3Ec/wPApwD8HYB/WZb9NE3zDQC+BWCz2fxiMBj8F0L4JYS/A3D8/v7+s4uLi+8B+F8AHgB4B2D+4eHhR0dHR18B0KzT6XwYhjEA2G2A5W9vb39ubm7+HkL4G4CnABywLHuVpunLAF4A8La1bW+1Wj0P4J/btm22m80VAL/q9XpfURR9BWDcbrffBEGAJElub2/v5wD8B2Dv7u7u7u7u/uXxeHwTQrgSQvjb7/f/tSzreWvbtpOTk9+cnJx8B0B9/wPAXykl39vtdtfv938D4F9SSlIp5W/btr3ValWk/gDgrVKpXCgUCp/L5fI3AI6klKSU7Ozs/F5aWvoRQP+UUmVZ9j8A/N8qVSoV5/8B/wF/ABr5v1X1JgAAAABJRU5ErkJggg==';


    useEffect(() => {
        try {
            const storedProfile = localStorage.getItem('userProfile');
            if (storedProfile) {
                const parsedProfile = JSON.parse(storedProfile);
                if (!parsedProfile.picture) {
                    parsedProfile.picture = defaultProfilePicture;
                }
                setUserProfile(parsedProfile);
            } else {
                setIsSetupModalOpen(true);
            }
        } catch (error) {
            console.error("Failed to parse user profile from localStorage", error);
            setIsSetupModalOpen(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('customers', JSON.stringify(
            customers.map(({ animationState, ...rest }) => rest) // Don't persist animation state
        ));
    }, [customers]);

    const handleSaveProfile = (profile: UserProfile) => {
        const profileToSave = {
            ...profile,
            picture: profile.picture || defaultProfilePicture
        };
        localStorage.setItem('userProfile', JSON.stringify(profileToSave));
        setUserProfile(profileToSave);
        setIsSetupModalOpen(false);
    };

    const handleAddCustomer = (name: string) => {
        const newCustomer: Customer = {
            id: Date.now(),
            name,
            createdAt: new Date().toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' }),
            orders: [],
            color: getColorForName(name),
            animationState: 'new',
        };
        setCustomers(prev => [newCustomer, ...prev]);
        setTimeout(() => {
            setCustomers(prev => prev.map(c => c.id === newCustomer.id ? { ...c, animationState: undefined } : c));
        }, 500);
    };

    const handleDeleteCustomer = (id: number) => {
        if (customerUndoAction) {
            customerUndoAction.onFinalize();
        }

        const customerToDelete = customers.find(c => c.id === id);
        if (!customerToDelete) return;

        setCustomers(prev => prev.map(c => c.id === id ? { ...c, animationState: 'deleting' } : c));

        setCustomerUndoAction({
            key: id,
            message: 'تم حذف العميل.',
            onFinalize: () => {
                setCustomers(prev => prev.filter(c => c.id !== id));
                const currentView = parseHash();
                if (currentView.view === 'detail' && currentView.customerId === id) {
                    window.location.hash = '#/';
                }
            },
            onUndo: () => {
                setCustomers(prev => prev.map(c => c.id === id ? { ...c, animationState: undefined } : c));
            }
        });
    };

    const handleDeleteAllCustomers = () => {
        setCustomers(prev => prev.map(c => ({...c, animationState: 'deleting'})));
        setTimeout(() => {
            setCustomers([]);
            setIsDeleteConfirmOpen(false);
        }, 500);
    };

    const handleUpdateCustomer = (updatedCustomer: Customer) => {
        setCustomers(prev => prev.map(c => c.id === updatedCustomer.id ? updatedCustomer : c));
    };

    const handleSelectCustomer = (customer: Customer) => {
        window.location.hash = `#/customer/${customer.id}`;
    };

    const handleGoBackToList = () => {
        window.location.hash = '#/';
    };

    if (isSetupModalOpen) {
        return <SetupModal onSave={handleSaveProfile} />;
    }
    
    const allCodes = [...new Set(customers.flatMap(c => c.orders.map(o => o.code)).filter(Boolean))];
    const allNotes = [...new Set(customers.flatMap(c => c.orders.map(o => o.note)).filter(Boolean))];
    const customerToDelete = customerToDeleteId ? customers.find(c => c.id === customerToDeleteId) : null;

    return (
        <div className="app-container">
            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} userProfile={userProfile} />
            <div className={`app-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
                <header className="header">
                    {selectedCustomer ? (
                        <button className="btn-icon header-icon" onClick={handleGoBackToList} aria-label="عودة">
                            <BackIcon />
                        </button>
                    ) : (
                         <button className="btn-icon profile-button" onClick={() => setIsMenuOpen(true)} aria-label="فتح القائمة">
                            <div className="profile-picture-border-wrapper">
                               <div className="profile-picture" style={{ backgroundImage: `url(${userProfile?.picture})`}}></div>
                            </div>
                        </button>
                    )}
                    <h1>{selectedCustomer ? selectedCustomer.name : userProfile?.name || 'My Order'}</h1>
                    {selectedCustomer ? <div className="header-spacer"></div> : (
                         <button className="btn-icon header-icon" onClick={() => { setIsDeleteConfirmOpen(true); }} aria-label="حذف الكل">
                            <TrashIcon />
                        </button>
                    )}
                </header>
                <div className="page-container">
                    <div className={`page-wrapper ${selectedCustomer ? 'detail-view-active' : ''}`}>
                        <div className="page list-page">
                            <CustomerListPage
                                customers={customers}
                                onAddCustomer={handleAddCustomer}
                                onDeleteCustomer={setCustomerToDeleteId}
                                onSelectCustomer={handleSelectCustomer}
                            />
                        </div>
                        <div className="page detail-page">
                            {selectedCustomer && (
                                <CustomerDetailPage
                                    customer={selectedCustomer}
                                    onUpdateCustomer={handleUpdateCustomer}
                                    allCodes={allCodes}
                                    allNotes={allNotes}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
             <ConfirmationDialog
                isOpen={isDeleteConfirmOpen}
                onClose={() => { setIsDeleteConfirmOpen(false); }}
                onConfirm={handleDeleteAllCustomers}
                title="تأكيد الحذف"
            >
                هل أنت متأكد من رغبتك في حذف جميع العملاء؟ لا يمكن التراجع عن هذا الإجراء.
            </ConfirmationDialog>
            <ConfirmationDialog
                isOpen={!!customerToDelete}
                onClose={() => setCustomerToDeleteId(null)}
                onConfirm={() => {
                    if (customerToDeleteId) {
                        handleDeleteCustomer(customerToDeleteId);
                    }
                    setCustomerToDeleteId(null);
                }}
                title="تأكيد حذف العميل"
            >
                {customerToDelete && `هل أنت متأكد أنك تريد حذف العميل "${customerToDelete.name}"؟`}
            </ConfirmationDialog>
            <UndoToast
                key={customerUndoAction?.key}
                action={customerUndoAction}
                onClear={() => setCustomerUndoAction(null)}
            />
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);