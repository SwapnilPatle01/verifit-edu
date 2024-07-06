import React, { useState } from "react";
import { Button, Input, Modal, Checkbox } from "antd";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseAuthor, setCourseAuthor] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [courseDuration, setCourseDuration] = useState("");
  const [courses, setCourses] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const newCourse = {
      courseName,
      courseDescription,
      courseAuthor,
      isPaid,
      courseDuration,
    };
    setCourses([...courses, newCourse]);
    setIsModalVisible(false);

    setCourseName("");
    setCourseDescription("");
    setCourseAuthor("");
    setIsPaid(false);
    setCourseDuration("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className="logo">
          <img src={"/img/logo2.png"} alt="Logo" />
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Contact</li>
          <Button onClick={showModal}>Create Course</Button>
        </ul>
      </nav>

      <Modal
        title="Create Course"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <Input
          placeholder="Course Description"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          style={{ marginTop: 10 }}
        />

        <Input
          placeholder="Course Author"
          value={courseAuthor}
          onChange={(e) => setCourseAuthor(e.target.value)}
          style={{ marginTop: 10 }}
        />
        <Checkbox
          checked={isPaid}
          onChange={(e) => setIsPaid(e.target.checked)}
          style={{ marginTop: 10 }}
        >
          Paid Course
        </Checkbox>
        <Input
          placeholder="Course Duration"
          value={courseDuration}
          onChange={(e) => setCourseDuration(e.target.value)}
          style={{ marginTop: 10 }}
        />
      </Modal>

      <div className={styles.courseContainer}>
        {courses.map((course, index) => (
          <div key={index} className={styles.courseCard}>
            <h1>Course Name:{course.courseName}</h1>
            <textarea>
              <strong>Description:</strong> {course.courseDescription}
            </textarea>
            <p>
              <strong>Author:</strong> {course.courseAuthor}
            </p>
            <p>
              <strong>Status:</strong> {course.isPaid ? "Paid" : "Unpaid"}
            </p>
            <p>
              <strong>Duration:</strong> {course.courseDuration}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
