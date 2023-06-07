function calculateHighestGPA() {
    const table = document.getElementById('studentTable');
    const rows = table.rows;
    let highestGPA = -1;
    let studentsWithHighestGPA = [];

    for (let i = 1; i < rows.length; i++) {
      const student = rows[i];
      const gpa = calculateGPA(student);
      if (gpa > highestGPA) {
        highestGPA = gpa;
        studentsWithHighestGPA = [student.cells[0].textContent];
      } else if (gpa === highestGPA) {
        studentsWithHighestGPA.push(student.cells[0].textContent);
      }
    }

    alert('Students with the highest GPA is: ' + studentsWithHighestGPA.join(', '));
  }

  function calculateLowestGPA() {
    const table = document.getElementById('studentTable');
    const rows = table.rows;
    let lowestGPA = 101;
    let studentsWithLowestGPA = [];

    for (let i = 1; i < rows.length; i++) {
      const student = rows[i];
      const gpa = calculateGPA(student);
      if (gpa < lowestGPA) {
        lowestGPA = gpa;
        studentsWithLowestGPA = [student.cells[0].textContent];
      } else if (gpa === lowestGPA) {
        studentsWithLowestGPA.push(student.cells[0].textContent);
      }
    }

    alert('Students with the lowest GPA is: ' + studentsWithLowestGPA.join(', '));
  }

  function calculateGPA(student) {
    const marks = Array.from(student.cells).slice(1).map(cell => parseInt(cell.textContent));
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    return totalMarks / marks.length;
  }

  function listSubjectsWithHighestMarks() {
    const table = document.getElementById('studentTable');
    const rows = table.rows;
    let highestMarks = -1;
    let subjectsWithHighestMarks = [];

    for (let i = 1; i < rows[0].cells.length; i++) {
      let highestMark = -1;
      let studentsWithHighestMark = [];

      for (let j = 1; j < rows.length; j++) {
        const mark = parseInt(rows[j].cells[i].textContent);
        if (mark > highestMark) {
          highestMark = mark;
          studentsWithHighestMark = [rows[j].cells[0].textContent];
        } else if (mark === highestMark) {
          studentsWithHighestMark.push(rows[j].cells[0].textContent);
        }
      }

      if (highestMark > highestMarks) {
        highestMarks = highestMark;
        subjectsWithHighestMarks = [{ subject: rows[0].cells[i].textContent, students: studentsWithHighestMark }];
      } else if (highestMark === highestMarks) {
        subjectsWithHighestMarks.push({ subject: rows[0].cells[i].textContent, students: studentsWithHighestMark });
      }
    }

    let result = '';
    for (const subject of subjectsWithHighestMarks) {
      result += 'Subject: ' + subject.subject + ', Students with Highest Marks: ' + subject.students.join(', ') + '\n';
    }

    alert(result);
  }

  function listSubjectsWithLowestMarks() {
    const table = document.getElementById('studentTable');
    const rows = table.rows;
    let lowestMarks = 101;
    let subjectsWithLowestMarks = [];

    for (let i = 1; i < rows[0].cells.length; i++) {
      let lowestMark = 101;
      let studentsWithLowestMark = [];

      for (let j = 1; j < rows.length; j++) {
        const mark = parseInt(rows[j].cells[i].textContent);
        if (mark < lowestMark) {
          lowestMark = mark;
          studentsWithLowestMark = [rows[j].cells[0].textContent];
        } else if (mark === lowestMark) {
          studentsWithLowestMark.push(rows[j].cells[0].textContent);
        }
      }

      if (lowestMark < lowestMarks) {
        lowestMarks = lowestMark;
        subjectsWithLowestMarks = [{ subject: rows[0].cells[i].textContent, students: studentsWithLowestMark }];
      } else if (lowestMark === lowestMarks) {
        subjectsWithLowestMarks.push({ subject: rows[0].cells[i].textContent, students: studentsWithLowestMark });
      }
    }

    let result = '';
    for (const subject of subjectsWithLowestMarks) {
      result += 'Subject: ' + subject.subject + ', Students with Lowest Marks: ' + subject.students.join(', ') + '\n';
    }

    alert(result);
  }

  function listStudentsWithHighestScoreBySubject() {
    const table = document.getElementById('studentTable');
    const rows = table.rows;

    let result = '';

    for (let i = 1; i < rows.length; i++) {
      const student = rows[i];
      let highestMark = -1;
      let subjectsWithHighestMark = [];

      for (let j = 1; j < student.cells.length; j++) {
        const mark = parseInt(student.cells[j].textContent);
        if (mark > highestMark) {
          highestMark = mark;
          subjectsWithHighestMark = [{ subject: rows[0].cells[j].textContent, mark }];
        } else if (mark === highestMark) {
          subjectsWithHighestMark.push({ subject: rows[0].cells[j].textContent, mark });
        }
      }

      result += 'Student: ' + student.cells[0].textContent + '\n';
      for (const subject of subjectsWithHighestMark) {
        result += 'Subject: ' + subject.subject + ', Highest Mark: ' + subject.mark + '\n';
      }
    }

    alert(result);
  }

  function listStudentsWithLowestScoreBySubject() {
    const table = document.getElementById('studentTable');
    const rows = table.rows;

    let result = '';

    for (let i = 1; i < rows.length; i++) {
      const student = rows[i];
      let lowestMark = 101; 
      let subjectsWithLowestMark = [];

      for (let j = 1; j < student.cells.length; j++) {
        const mark = parseInt(student.cells[j].textContent);
        if (mark < lowestMark) {
          lowestMark = mark;
          subjectsWithLowestMark = [{ subject: rows[0].cells[j].textContent, mark }];
        } else if (mark === lowestMark) {
          subjectsWithLowestMark.push({ subject: rows[0].cells[j].textContent, mark });
        }
      }

      result += 'Student: ' + student.cells[0].textContent + '\n';
      for (const subject of subjectsWithLowestMark) {
        result += 'Subject: ' + subject.subject + ', Lowest Mark: ' + subject.mark + '\n';
      }
    }

    alert(result);
  }

  function listSubjectsAboveAverage() {
    const table = document.getElementById('studentTable');
    const rows = table.rows;
    let result = '';

    for (let i = 1; i < rows[0].cells.length; i++) {
      const subject = rows[0].cells[i].textContent;
      const marks = Array.from(rows).slice(1).map(row => parseInt(row.cells[i].textContent));
      const average = calculateAverage(marks);

      const aboveAverageMarks = marks.filter(mark => mark > average);
      if (aboveAverageMarks.length > 0) {
        result += 'Subject: ' + subject + ', Marks Above Average: ' + aboveAverageMarks.join(', ') + '\n';
      }
    }

    alert(result);
  }

  function calculateAverage(marks) {
    const sum = marks.reduce((total, mark) => total + mark, 0);
    return sum / marks.length;
  }

  function listStudentsAboveGPA() {
    const table = document.getElementById('studentTable');
    const rows = table.rows;
    let result = '';

    for (let i = 1; i < rows.length; i++) {
      const student = rows[i];
      const gpa = calculateGPA(student);
      const marks = Array.from(student.cells).slice(1).map(cell => parseInt(cell.textContent));
      const aboveGPAMarks = marks.filter(mark => mark > gpa);

      if (aboveGPAMarks.length > 0) {
        result += 'Student: ' + student.cells[0].textContent + ', Marks Above GPA: ' + aboveGPAMarks.join(', ') + '\n';
      }
    }

    alert(result);
  }

  function listSubjectsAboveClassAverage() {
    const table = document.getElementById('studentTable');
    const rows = table.rows;
    let result = '';

    for (let i = 1; i < rows[0].cells.length; i++) {
      const subject = rows[0].cells[i].textContent;
      const marks = Array.from(rows).slice(1).map(row => parseInt(row.cells[i].textContent));
      const average = calculateAverage(marks);

      const classAverage = calculateClassAverage(rows, i);

      if (average > classAverage) {
        result += 'Subject: ' + subject + ', Average: ' + average + '\n';
      }
    }

    alert(result);
  }

  function calculateClassAverage(rows, columnIndex) {
    const marks = Array.from(rows).slice(1).map(row => parseInt(row.cells[columnIndex].textContent));
    return calculateAverage(marks);
  }

  function listStudentsBelowClassAverage() {
    const table = document.getElementById('studentTable');
    const rows = table.rows;
    let result = '';

    const classAverage = calculateClassAverage(rows, 1);

    for (let i = 1; i < rows.length; i++) {
      const student = rows[i];
      const gpa = calculateGPA(student);

      if (gpa < classAverage) {
        result += 'Student: ' + student.cells[0].textContent + ', GPA: ' + gpa + '\n';
      }
    }

    alert(result);
  }
