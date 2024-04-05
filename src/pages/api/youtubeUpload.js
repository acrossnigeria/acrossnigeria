// pages/youtubeUpload.js

import { google } from 'googleapis';
import fs from 'fs';

// Initialize the YouTube Data API client
const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY, // Replace with your API key
});

export default async function youtubeUpload(videoFilePath, title, description, playlistId) {
  try {
    // Upload video to YouTube
    const res = await youtube.videos.insert({
      part: 'snippet,status',
      requestBody: {
        snippet: {
          title: title,
          description: description,
        },
        status: {
          privacyStatus: 'unlisted', // Set privacy status as needed
        },
      },
      media: {
        body: fs.createReadStream(videoFilePath),
      },
    });

    const videoId = res.data.id;

    // Add uploaded video to playlist
    if (playlistId) {
      await youtube.playlistItems.insert({
        part: 'snippet',
        requestBody: {
          snippet: {
            playlistId: playlistId,
            resourceId: {
              kind: 'youtube#video',
              videoId: videoId,
            },
          },
        },
      });
    }

    return videoId;
  } catch (error) {
    console.error('Error uploading video to YouTube:', error);
    throw error;
  }
}
