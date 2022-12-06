import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./components/main";
import MyPage from "./pages/my/MyPage";
import Community from "./pages/community";
import * as P from "./pages";
import TopHeader from "./components/topHeader";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/class" element={<P.ClassListPage />} />
          <Route path="/class/:classId/curriculum" element={<P.ClassCurriculumPage /> } />
          <Route path="/class/:classId/report" element={<P.ClassReportPage /> } />
          <Route path="/class/:classId/notice" element={<P.ClassNoticePage /> } />
          <Route path="/class/:classId/attendance" element={<P.ClassAttendancePage /> } />
          {/* <Route path="/class/:classId/attendance" element={<P.ClassAttendanceCompletedPage title="지금은 출석 체크 중이 아닙니다." /> } /> */}
          {/* <Route path="/class/:classId/attendance" element={<P.InAttendancePage /> } /> */}
          {/* <Route path="/class/:classId/attendance" element={<P.BeforeAttendancePage /> } /> */}
          <Route path="/admin" element={<P.AdminMainPage />} />
          <Route path="/admin/member" element={<P.AdminMainPage />} />
          <Route path="/admin/community" element={<P.AdminMainPage />} />
          <Route path="/admin/class" element={<P.AdminMainPage />} />
        </ Routes>
        <Footer />
      </BrowserRouter>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
