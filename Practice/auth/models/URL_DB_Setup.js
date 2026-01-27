import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const DBSchema = new mongoose.Schema(
  {
    originalURL: {
      type: String,
      required: true,
      trim: true,
    },

    shortID: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(8), // ✅ FIX
      index: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // ✅ must match model name
    },

    impressions: [
      {
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

export const url = mongoose.model('URL', DBSchema);
