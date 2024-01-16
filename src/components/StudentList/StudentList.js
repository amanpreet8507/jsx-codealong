import Student from '../Student/Student';
import './StudentList.scss';

function StudentList() {
    return (
        <section className="student-list">
            <Student />
            <Student />
            <Student />
        </section>
    )
}

export default StudentList