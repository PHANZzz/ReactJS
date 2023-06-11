import HomeScreen from './screen/home/HomeScreen';
import AboutScreen from './screen/about/AboutScreen';
import TeacherScreen from './screen/teacher/TeacherScreen';
import MainContainer from './screen/container/ContainerScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <div style={{padding:'10px'}}><Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/teacher' element={<TeacherScreen />} />
        </Routes></div>
      </MainContainer>
    </BrowserRouter>
  );
}
export default App;