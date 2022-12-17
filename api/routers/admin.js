const router = require("express").Router();

const {
  adminDogs,
  adminDogsId,
  adminCreateDog,
  adminUpdateDog,
  adminDeleteDog,
 
} = require("../controllers/adminDogs");

const {
  
  
  adminUsers,
  adminUsersId,
  adminCreateUser,
  adminUpdateUser,
  adminDeleteUser,
  
} = require("../controllers/adminUsers");


const {
  adminVolunteer,
  adminVolunteerId,
  adminCreateVolunteer,
  adminUpdateVolunteer,
  adminDeleteVolunteer

} = require("../controllers/adminVolunteers"); 


const {
  adminPress,
  adminPressId,
  adminCreatePress,
  adminUpdatePress,
  adminDeletePress

} = require("../controllers/adminPress"); 


//------ /api/admin/dogs
router.get("/dogs", adminDogs);
router.get("/dogs/:id", adminDogsId);
router.post("/dogs", adminCreateDog);
router.put("/dogs/:id", adminUpdateDog);
router.delete("/dogs/:id", adminDeleteDog);
//------ /api/admin/users
router.get("/users", adminUsers);
router.get("/users/:id", adminUsersId);
router.post("/users", adminCreateUser);
router.put("/users/:id", adminUpdateUser);
router.delete("/users/:id", adminDeleteUser);

//------ /api/admin/volunteers
router.get("/volunteers", adminVolunteer);
router.get("/volunteers/:id", adminVolunteerId);
router.post("/volunteers", adminCreateVolunteer);
router.put("/volunteers/:id", adminUpdateVolunteer);
router.delete("/volunteers/:id", adminDeleteVolunteer);

//------ /api/admin/press
router.get("/press", adminPress);
router.get("/press/:id", adminPressId);
router.post("/press", adminCreatePress);
router.put("/press/:id", adminUpdatePress);
router.delete("/press/:id", adminDeletePress);


module.exports = router;