import React from 'react';
import AdminComp from './../../components/admin/Admin';
import HeaderAdmin from '../../components/admin/HeaderAdmin';

function Admin(props) {
    return (
        <div>
            <HeaderAdmin/>
            <AdminComp/>
        </div>
    );
}

export default Admin;