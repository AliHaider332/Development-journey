import { schemaModel } from '../Modules/mongoDB.js';
export const getController = async (req, res) => {
  const result = await schemaModel.find();
  return res.json(result);
};
export const postCntroller = async (req, res) => {
  const obj = req.query;

  const result = await schemaModel.create({
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email,
    gender: obj.gender,
    job: obj.job,
  });

  return res.status(201).json({ result });
};

export const getById = async (req, res) => {
  const obj = await schemaModel.findById(req.params.id);
  return res.json({ status: 200, user: obj });
};

export const deleteById = async (req, res) => {
  await schemaModel.findByIdAndDelete(req.params.id);
  return res.json({ status: 200 });
};

export const update = async (req, res) => {
  const data = await schemaModel.findByIdAndUpdate(
    req.params.id,
    { [req.params.change]: req.params.value },
    { new: true }
  );
  return res.json({ status: 200 });
};
