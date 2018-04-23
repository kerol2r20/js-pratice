/**
 * This function should read the JSON format file that contain data of employees.
 * You should deserialize it, and then return *Promise* resolve the collection of employees' names.
 * TIP: using Array.prototype.map
 * @param {string} filename - employees data
 */
export function getNames (filename) {
}

/**
 * This function should read file and deserialize it as getNames at first time.
 * Second, you should pick up the employee with the normal BMI (18.5~25). (18.5<=BMI<=25)
 * Finally, return collcetion of these employees' name, email, and BMI in format {name: "xxx", email: "yyy", BMI: zzz}.
 * TIP: implement it by chaining Array.prototype.filter & Array.prototype.map
 * @param {string} filename - employees data
 */
export function filterNormalBMI (filename) {
}

/**
 * As previous two function. You have to read file and deserialize it.
 * Then, you have to split all employees into two categories by gender (male and female).
 * Final, return the average of height and weight of these two categories.
 * Return object like the following sample.
 * {
 *  male: {
 *    weight: xxx,
 *    height: yyy
 *  },
 *  female: {
 *    weight: xxx,
 *    height: yyy
 *  }
 * }
 * TIP: Array.prototype.reduce may help you solve this problem.
 * @param {string} filename - employees data
 */
export function genderAvgWeightAndHeight (filename) {
}
