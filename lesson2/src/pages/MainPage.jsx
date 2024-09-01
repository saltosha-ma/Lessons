import About from '../components/about/About';
import Title from '../components/title/Title';

function MainPage() {
    return (
        <div>
            <About info={{title: "Some Title", body: "Some body"}} />
            <Title text="Hello world" />
        </div>
    );
}

export default MainPage;