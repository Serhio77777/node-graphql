let courses = require('./data')

const get = ({id}) => { 
  return courses.find(course => course.id == id);
}

const update = ({id, input}) => {
    Object.keys(input).forEach(key => {
        courses[courses.find(course => course.id == id).id - 1][key] = input[key];
    });
    return courses.find(course => course.id == id);
}

const create = ({input}) => {
    console.log(courses)
    input.id = courses.length;
    courses.push(input);
    return input;
}

const remove = ({id}) => { 
    courses = courses.filter(course => course.id !== id);
    return 'Course deleted';
}

const getAll = () => {
    return courses;
}

module.exports.get = get.bind(this)
module.exports.getAll = getAll.bind(this)
module.exports.create = create.bind(this)
module.exports.update = update.bind(this)
module.exports.remove = remove.bind(this)
