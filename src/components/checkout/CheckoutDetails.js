import React from 'react';
import CheckoutInf from './CheckoutInf';
import InfOrder from './InfOrder';
import ChoosePayment from '../cart/ChoosePayment';
import OutputOrder from '../cart/OutputOrder';

function CheckoutDetails(props) {
    return (
        <div>
            <div className="container_main">
                <span className="text-main-bg text-[24px] font-bold block mb-[20px]">Thanh toán</span>
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-3">
                        <CheckoutInf/>
                        <OutputOrder/>
                        <ChoosePayment/>
                    </div>
                    <div className="col-span-2">
                        <InfOrder/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutDetails;