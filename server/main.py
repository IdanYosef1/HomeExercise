from app import app, mongo
from flask import jsonify, request


col_employees = mongo.db.employees


@app.route("/get_all_employees", methods=['GET'])
def get_all_employees():
    try:
        employees_list = []
        cursor = col_employees.find({})  # find all employees
        for employee in cursor:
            employees_list.append({'Name': employee['Name'],
                                   'Email': employee['Email'],
                                   'Address': employee["Address"],
                                   "Phone": employee["Phone"],
                                   'MaritalStatus': employee['MaritalStatus'],
                                   'Gender': employee['Gender'],
                                   'Salary': employee['Salary']})
        return jsonify(list_employees=employees_list), 200
    except:
        return jsonify(message="Error in get_all_employees"), 500


@app.route("/get_employee", methods=['POST'])
def get_employee():
    try:
        request_json = request.get_json()
        email = request_json["Email"]
        cursor = col_employees.find({'Email': email})[0]
        employee = {}
        for key in cursor:
            if key != '_id':
                employee[key] = cursor[key]
                return jsonify(employee=employee), 200
    except:
        return jsonify(message="Error in get_employee"), 500


@app.route("/upload_employee", methods=['POST'])
def upload_employee():
    if request.method == 'POST':
        request_json = request.get_json()
        name = request_json["Name"]
        email = request_json["Email"]
        address = request_json["Address"]
        phone = request_json["Phone"]
        maritalStatus = request_json['MaritalStatus']
        gender = request_json['Gender']
        salary = request_json['Salary']
    try:
        employee_email_mongo = col_employees.find_one({"Email": email})
        if employee_email_mongo == None:  # if employee does not exist in DB
            col_employees.insert_one(
                {'Name': name, 'Email': email, 'Address': address,
                 'Phone': phone, 'MaritalStatus': maritalStatus, 'Gender': gender,
                 'Salary': salary})
            return jsonify(message="Employee Uploaded"), 200
        else:
            return jsonify(message="Employee Already Exists"), 404
    except:
        return jsonify(message="Error in uploading Employee"), 500


@app.route("/compare_between_employees", methods=['POST'])
def compare_between_employees():
    try:
        request_json = request.get_json()
        employee1_email = request_json["employee1_email"]
        employee2_email = request_json["employee2_email"]
        employees_list = []
        cursor = col_employees.find({})  # find all employees
        for employee in cursor:
            employees_list.append({'Name': employee['Name'],
                                   'Email': employee['Email'],
                                   'Address': employee["Address"],
                                   'Phone': employee["Phone"],
                                   'MaritalStatus': employee['MaritalStatus'],
                                   'Gender': employee['Gender'],
                                   'Salary': employee['Salary']})
        employee1 = [
            cdict for cdict in employees_list if cdict["Email"] == employee1_email][0]
        employee2 = [
            cdict for cdict in employees_list if cdict["Email"] == employee2_email][0]
        print(employee1, "dd")
        chosen_name_employee = employee1["Name"] if employee1["Salary"] > employee2["Salary"] else employee2["Name"]
        richer = 1 if employee1["Salary"] > employee2["Salary"] else 2
        salary1 = employee1["Salary"] if richer == 1 else employee2["Salary"]
        salary2 = employee1["Salary"] if not richer == 1 else employee2["Salary"]
        return jsonify(chosen_name_employee=chosen_name_employee, salary1=salary1, salary2=salary2), 200
    except:
        return jsonify(message="error in compare_between_employees"), 500


@app.route("/edit_employee", methods=['PUT'])
def edit_employee():
    if request.method == 'PUT':
        request_json = request.get_json()
        name = request_json["Name"]
        address = request_json["Address"]
        email = request_json["Email"]
        phone = request_json["Phone"]
        maritalStatus = request_json['MaritalStatus']
        gender = request_json['Gender']
        salary = request_json['Salary']
    try:
        employee_email_mongo = col_employees.find_one({"Email": email})
        if employee_email_mongo != None:
            col_employees.update_one({'Email': email}, {'$set': {'Name': name,
                                                                 'Address': address,
                                                                 'Email': email,
                                                                 'Phone': phone,
                                                                 'MaritalStatus': maritalStatus,
                                                                 'Gender': gender,
                                                                 'Salary': salary}})
            return jsonify(message="Employee Updated"), 200
        else:
            return jsonify(message="Employee Not Found"), 404
    except:
        return jsonify(message="Error in updating Employee"), 500


if __name__ == '__main__':
    app.run(debug=True)
