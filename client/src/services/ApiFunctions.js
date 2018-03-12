import Api from '@/services/Api';

export default {
    async getSettings () {
        return Api().get("getSettings");
    },
    async setSettings (currentSettings) {
        return Api().post("setSettings", currentSettings);
    },
    async getRooms() {
        return Api().get("roomDict");
    },
    async getReservations(in_room, in_startDate) {
        var reservationParam = {
            room: in_room,
            startDate: in_startDate
        }
        return Api().post("getReservations", reservationParam);
    },
/* // this doesnt exist.
    async createEmployee (info) {
        return Api().post('createEmployee', info)
    },*/
    async createEmployeeCheck(employeeCheckResult) {
        return Api().post('createEmployeeCheck', employeeCheckResult)
    },
    async createEmployeeConfirm(employeeAddedBool) {
        return Api().post('createEmployeeConfirm', employeeAddedBool)
    }

/*
    Functions linked in advance.

    These can be used in the server side app.js file and in the client side vue files.

*/


    ,
    async addEditRoom(info1) { // this addEditRoom function matches to frontend
        return Api().post('addEditRoom', info1) // this addEditRoom string matches the same on on the backend
    },
    async checkName(info2) {
        return Api().post('checkName', info2)
    },
    async finalRoomUpdate(info3) {
        return Api().post('finalRoomUpdate', info3)
    },
    async getFamilyList(info4) {
        return Api().post('getFamilyList', info4)
    },
    async getEmployeeList(employeeList) {
        return Api().get('getEmployeeList')
    }

    /* 
        backend functions not yet linked

	connect,
	getTypes,
	createJSON
    */



}