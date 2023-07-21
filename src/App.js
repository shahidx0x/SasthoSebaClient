import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DoctorList } from "./components/DoctorList/DoctorList";
import { Layout } from "./routes/Layout";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { Homepage } from "./pages/Homepage/Homepage";
import { Footer } from "./Shared/Footer/Footer";
import { Navbar } from "./Shared/Navbar/Navbar";
import AllDoctors from "./components/AllDoctors/AllDoctors";
import NotFound from "./components/404Page/NotFound";
import { UserOutlet } from "./routes/UserOutlet";
import { Appoinment } from "./components/Appoinment/Appoinment";
import { DoctorOutlet } from "./routes/DoctorOutlet";
import { AppointedPatient } from "./users/doctor/AppointedPatient/AppointedPatient";
import MyAppointments from "./users/patient/MyAppoinments/MyAppoinments";
import { UserDashbordOutlet } from "./routes/UserDashBordOutlet";
import AboutUs from "./components/AboutUS/AboutUs";
import { AdminOutlet } from "./routes/AdminOutlet";
import UserManagement from "./users/admin/UserManagment/UserManagement";
import { MedicineCarosule } from "./components/Carosule/MedicineCarosule";
import AddMedicine from "./users/store/AddMedicine";

import UserCarts from "./components/UserCarts/UserCarts";
import OrderSummery from "./components/OrderSummery/OrderSummery";
import { UserPrescription } from "./users/patient/Dashbord/UserPrescription";
import PaymentSuccess from "./components/Payments_Validate/PaymentsSuccess";
import Prescription from "./users/patient/Prescription/Prescription";
import { AddNewDoctor } from "./users/admin/AddDoctors/AddNewDoctor";
import Approved from "./users/doctor/AppointedPatient/Approved";
import { CreatePrescription } from "./users/doctor/PatientList/CreatePrescription/CreatePrescription";
import PaymentSuccessDoc from "./components/Payments_Validate/PaymentSuccessDoc";
import EmedicPrescription from "./users/patient/EmedicPrescription/EmedicPrescription";
import DoctorManagement from "./users/admin/DoctorManagment/DoctorManagment";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { AddNewStore } from "./users/admin/AddStore/AddNewStore";
import { AddNewAmbulence } from "./users/admin/AddAmbulence/AddNewAmbulence";
import AmbulenceRequest from "./components/SignUp/SignUpRequest/AmbulenceRequest";
import { CustomerSignUp } from "./components/SignUp/SignUpRequest/CustomerSignup";
import Ambulence from "./components/Map/Ambulence";
import AmbulenceManagement from "./users/admin/ManageAmbulence/ManageAmbulence.";
import MakeBooking from "./components/Booking/MakeBooking";
import DoctorRequest from "./components/SignUp/SignUpRequest/DoctorRequest";
import StoreRequest from "./components/SignUp/SignUpRequest/StoreRequest";
import AmbulenceReservation from "./users/ambulence/AmbulenceReservation";
import { AmbulenceOutlet } from "./routes/AmbulenceOutlet";
import { StoreOutlet } from "./routes/StoreOutlet";
import ManageMedicine from "./users/store/Manage Medicine/ManageMedicine";

function App() {
  return (
    <>
      <Navbar />
      <MessengerCustomerChat
        pageId="113836101587390"
        appId="574970911045579"
        htmlRef="d"
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Homepage />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
          <Route path="payment-success-doc" element={<PaymentSuccessDoc />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="alldoctors" element={<AllDoctors />} />
          <Route path="login" element={<Login />} />
          <Route path="signup/customer" element={<CustomerSignUp />} />
          <Route path="request/ambulence" element={<AmbulenceRequest />} />
          <Route path="request/doctor" element={<DoctorRequest />} />
          <Route path="request/store" element={<StoreRequest />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="medicine-shop" element={<MedicineCarosule />} />
         
          
          <Route path="doctors/:typeOfdoctor" element={<DoctorList />} />
        </Route>

    

        <Route path="/" element={<UserOutlet />}>
          <Route path="appointment/:pakId" element={<Appoinment />} />
          <Route path="ambulance/make/booking/:name/:email/:cont/:c_no" element={<MakeBooking />} />
          <Route path="ambulance" element={<Ambulence />} />
        </Route>

        <Route path="/" element={<AmbulenceOutlet />}>
          <Route path="ambulence/dashbord/usr-req" element={<AmbulenceReservation />} />
        </Route>

        <Route path="/" element={< StoreOutlet/>}>
          <Route path="store/manage/medicine" element={<ManageMedicine />} />
          <Route path="store/add/medicine" element={<AddMedicine />} />
        </Route>


        <Route path="/" element={<DoctorOutlet />}>
          <Route path="doctor/dashbord" />
          <Route
            path="doctor/dashbord/appointed-patient"
            element={<AppointedPatient />}
          />
          <Route path="doctor/dashbord/approved" element={<Approved />} />
          <Route path="doctor/crps" element={<CreatePrescription />} />
        </Route>

        <Route path="/" element={<AdminOutlet />}>
          <Route path="admin/dashbord/usrmanage" element={<UserManagement />} />
          <Route
            path="admin/dashbord/doctormanage"
            element={<DoctorManagement />}
          />
            <Route
            path="admin/dashbord/ambulence-manage"
            element={<AmbulenceManagement />}
          />
         
          <Route path="add/new/doctor" element={<AddNewDoctor />} />
          <Route path="add/new/store" element={<AddNewStore />} />
          <Route path="add/new/ambulence" element={<AddNewAmbulence />} />
          
        </Route>
        <Route path="/user/dashbord" element={<UserDashbordOutlet />}>
          <Route path="my-appoinments" element={<MyAppointments />} />
          <Route path="reservation/ambulence" element={<AmbulenceReservation />} />
          <Route path="my-carts" element={<UserCarts />} />
          <Route path="order-summery" element={<OrderSummery />} />
          <Route path="my-prescription" element={<Prescription />} />
          <Route
            path="my-emedic-prescription"
            element={<EmedicPrescription />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
