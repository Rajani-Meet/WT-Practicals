
let students = [];
let editIndex = -1;
document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const grade = document.getElementById('grade').value;
    if (editIndex > -1) {
        students[editIndex] = { name, age, grade };
        editIndex = -1;
    } else {
        students.push({ name, age, grade });
    }
    document.getElementById('studentForm').reset();
    displayStudents();
});
function displayStudents() {
    const tbody = document.querySelector('#studentTable tbody');
    tbody.innerHTML = ''; // Clear existing rows
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
<td>${student.name}</td>
<td>${student.age}</td>
<td>${student.grade}</td>
<td>
    <button onclick="editStudent(${index})">Edit</button>
    <button onclick="deleteStudent(${index})">Delete</button>
</td>
`;


        tbody.appendChild(row);
    });
}
function editStudent(index) {
    editIndex = index;
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('grade').value = student.grade;
}
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}