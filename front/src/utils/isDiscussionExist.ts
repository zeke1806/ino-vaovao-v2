import { Discussion, User } from '../api/types';

export function isDiscussionExist(
  members: User[],
  discussions: Discussion[],
): null | Discussion {
  const membersId = JSON.stringify(members.map((m) => m.id).sort());
  let discussion: null | Discussion = null;
  discussions.forEach((disc) => {
    if (membersId === JSON.stringify(disc.members.map((m) => m.id).sort())) {
      discussion = disc;
    }
  });
  return discussion;
}
