import './App.css';
import Posts from './posts';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <Posts profileImage='https://avatars.githubusercontent.com/u/52074642?v=4' profileText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem asperiores molestias porro atque odio eveniet accusantium tenetur repudiandae quisquam ab, laborum possimus aliquam optio dolor totam nostrum dolorum recusandae?' />
          <br /><Posts profileImage='https://media.licdn.com/dms/image/C5103AQEvBhwpd6hDjw/profile-displayphoto-shrink_200_200/0/1570435329594?e=1677110400&v=beta&t=PKF4jSFgcIqrgrf1k9KWCfUWw4d7fNHJldR-YxGdHuA' profileText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem asperiores molestias porro atque odio eveniet accusantium tenetur repudiandae quisquam ab, laborum possimus aliquam optio dolor totam nostrum dolorum recusandae?' />
          <br /><Posts profileImage='https://www.hec.ca/en/profs/saad-ali.khan.jpg' profileText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem asperiores molestias porro atque odio eveniet accusantium tenetur repudiandae quisquam ab, laborum possimus aliquam optio dolor totam nostrum dolorum recusandae?' />
        </center>
      </header>
    </div>
  );
}

export default App;
