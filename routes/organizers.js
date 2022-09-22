const router = require('express').Router();
const objectRepository = require('../index');

const createOrganizerMW = 
  require('../middleware/organizers/createOrganizer')(objectRepository);
const getOrganizersMW = 
  require('../middleware/organizers/getOrganizers')(objectRepository);
const getOrganizerMW = 
  require('../middleware/organizers/getOrganizer')(objectRepository);
const getOrganizerByCredentialsMW = require('../middleware/organizers/getOrganizerByCredentials')(objectRepository);
const updateOrganizerMW = 
  require('../middleware/organizers/updateOrganizer')(objectRepository);
const deleteOrganizerMW = 
  require('../middleware/organizers/deleteOrganizer')(objectRepository);
const renderMW = 
  require('../middleware/organizers/render');

const asyncWrapper = require('../middleware/asyncWrapper');
const checkObjectIdMW = 
  require('../middleware/checkObjectId')(objectRepository);
const validOrganizerAttributesMW = require('../middleware/organizers/validOrganizerAttributes')(objectRepository);
const organizerExistsMW = require('../middleware/organizers/organizerExists')(objectRepository);


router.route('/')
  .get(
    asyncWrapper(getOrganizersMW),
    renderMW
  )
  .post(
    validOrganizerAttributesMW,
    asyncWrapper(createOrganizerMW),
    renderMW
  );

router.route('/login')
    .post(
      asyncWrapper(getOrganizerByCredentialsMW),
      renderMW
    )

router.route('/:id')
    .get(
      checkObjectIdMW,
      asyncWrapper(getOrganizerMW),
      organizerExistsMW,
      renderMW
    )
    .patch(
      checkObjectIdMW,
      validOrganizerAttributesMW,
      asyncWrapper(updateOrganizerMW),
      organizerExistsMW,
      renderMW
    )
    .delete(
      checkObjectIdMW,
      asyncWrapper(deleteOrganizerMW),
      organizerExistsMW,
      renderMW
    );

module.exports = router;