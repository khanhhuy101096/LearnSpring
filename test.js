var users = [
   {departmentId: "0010AA", username: "USER A 01", point: 1},
   {departmentId: "0010AA", username: "USER A 02", point: 1},
   {departmentId: "0010AA", username: "USER A 03", point: 1},
   {departmentId: "0010AL", username: "USER A 01", point: 2},
   {departmentId: "0010AL", username: "USER A 02", point: 2},
   {departmentId: "0010AL", username: "USER A 03", point: 2},
   {departmentId: "0010AP", username: "USER A 01", point: 3},
   {departmentId: "0010AP", username: "USER A 02", point: 3},
   {departmentId: "0010AS", username: "USER A 01", point: 4},
   {departmentId: "0010AS", username: "USER A 02", point: 4},
   {departmentId: "0010B", username: "USER B", point: 3},
   {departmentId: "0010C", username: "USER C", point: 2},
];
var departments = [
   {id: "0010AA", code: "DEP_A", name: "Phong ACC", companyId: "010A"},
   {id: "0010AL", code: "DEP_A", name: "Phong LOG", companyId: "010A"},
   {id: "0010AP", code: "DEP_A", name: "Phong POM", companyId: "010A"},
   {id: "0010AS", code: "DEP_A", name: "Phong SALE", companyId: "010A"},
   {id: "0010B", code: "DEP_B", name: "Phong ACC", companyId: "010B"},
   {id: "0010C", code: "DEP_C", name: "Phong ACC", companyId: "010C"},
];
var companies = [
   {id: "010A", code: "CMP_A", name: "Company A"},
   {id: "010B", code: "CMP_B", name: "Company B"},
   {id: "010C", code: "CMP_C", name: "Company C"},
];


users.sort(function(a, b){
    return a.point - b.point;
});
console.log(users);


var arrCompany = [];
for (var i=0; i< companies.length; i++){
    var arrDept = [];
    for (var j = 0; j<departments.length; j++){
        if (companies[i].id === departments[j].companyId){
            var arrUsers = [];
            for (var k = 0; k<users.length; k++){
                if (departments[j].id === users[k].departmentId){
                    arrUsers.push({"username": users[k].username,
                        "point": users[k].point});
                }
            }
            arrDept.push({"departmentCode,": departments[j].code,
                "departmentName": departments[j].name,
                "users": arrUsers});
        }
    }
    arrCompany.push({
        "companyCode": companies[i].code,
        "companyName": companies[i].name,
        "departments": arrDept
    });
}
console.log(arrCompany);

