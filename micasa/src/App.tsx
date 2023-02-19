import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Home, Login, Residence_Selection, Roommate_Selection, Signup, Student_Preference, PageNotFound} from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/residence-selection" element={<Residence_Selection />} />
          <Route path="/roommate-selection" element={<Roommate_Selection />} />
          <Route path="/student-preference" element={<Student_Preference />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
