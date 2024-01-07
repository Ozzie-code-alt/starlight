import { Schema, model, models } from "mongoose";


const FormModelSchema = new Schema({
    name:String,
    contactinfo:String,
    message:String,

},
{
    timestamps:true,
}
)

const FormModel = models.FormModel || model("FormModel", FormModelSchema)


export default FormModel