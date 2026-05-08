import mongoose, { Schema, model, models } from 'mongoose';

const LeadSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Agar model pehle se bana hai toh wahi use karega, nahi toh naya banayega
const Lead = models.Lead || model('Lead', LeadSchema);
export default Lead;