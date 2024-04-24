// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// interface SocialData {
//   name: string;
//   url: string;
//   followers: string | number;
// }

// const getTwitterFollowers = async () => {
//   const response = await axios.get('https://api.twitter.com/1.1/users/show.json?screen_name=itsharshag', {
//     headers: {
//       Authorization: `Bearer YOUR_TWITTER_BEARER_TOKEN`,
//     },
//   });
//   return response.data.followers_count;
// };

// const getLinkedInFollowers = async () => {
//   const response = await axios.get('https://api.linkedin.com/v2/me', {
//     headers: {
//       Authorization: `Bearer YOUR_LINKEDIN_ACCESS_TOKEN`,
//     },
//   });
//   return response.data.followers.total;
// };

// const getInstagramFollowers = async () => {
//   const response = await axios.get('https://www.instagram.com/itsharshag/?__a=1');
//   return response.data.graphql.user.edge_followed_by.count;
// };

// const getYoutubeSubscribers = async () => {
//   const response = await axios.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=YOUR_YOUTUBE_CHANNEL_ID&key=YOUR_YOUTUBE_API_KEY');
//   return response.data.items[0].statistics.subscriberCount;
// };



// const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
//   res.status(200).json(socialsData);
// };

// export default handler;
