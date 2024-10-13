const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, 'application/xml');
const students = xmlDOM.querySelectorAll('student');

const result = {
  list: Array.from(students).map(student => {
    const nameNode = student.querySelector('name');
    const lang = nameNode.getAttribute('lang');
    const name = `${nameNode.querySelector('first').textContent} ${nameNode.querySelector('second').textContent}`;
    const age = Number(student.querySelector('age').textContent);
    const prof = student.querySelector('prof').textContent;

    return { name, age, prof, lang };
  })
};

console.log(result);