/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserinfo = `mutation CreateUserinfo(
  $input: CreateUserinfoInput!
  $condition: ModelUserinfoConditionInput
) {
  createUserinfo(input: $input, condition: $condition) {
    id
    username
    profilepic {
      bucket
      region
      key
    }
    userdob
    userabout
    joinedon
  }
}
`;
export const updateUserinfo = `mutation UpdateUserinfo(
  $input: UpdateUserinfoInput!
  $condition: ModelUserinfoConditionInput
) {
  updateUserinfo(input: $input, condition: $condition) {
    id
    username
    profilepic {
      bucket
      region
      key
    }
    userdob
    userabout
    joinedon
  }
}
`;
export const deleteUserinfo = `mutation DeleteUserinfo(
  $input: DeleteUserinfoInput!
  $condition: ModelUserinfoConditionInput
) {
  deleteUserinfo(input: $input, condition: $condition) {
    id
    username
    profilepic {
      bucket
      region
      key
    }
    userdob
    userabout
    joinedon
  }
}
`;
export const createProfilestatus = `mutation CreateProfilestatus(
  $input: CreateProfilestatusInput!
  $condition: ModelProfilestatusConditionInput
) {
  createProfilestatus(input: $input, condition: $condition) {
    id
    status
    owner
  }
}
`;
export const updateProfilestatus = `mutation UpdateProfilestatus(
  $input: UpdateProfilestatusInput!
  $condition: ModelProfilestatusConditionInput
) {
  updateProfilestatus(input: $input, condition: $condition) {
    id
    status
    owner
  }
}
`;
export const deleteProfilestatus = `mutation DeleteProfilestatus(
  $input: DeleteProfilestatusInput!
  $condition: ModelProfilestatusConditionInput
) {
  deleteProfilestatus(input: $input, condition: $condition) {
    id
    status
    owner
  }
}
`;
export const createStory = `mutation CreateStory(
  $input: CreateStoryInput!
  $condition: ModelStoryConditionInput
) {
  createStory(input: $input, condition: $condition) {
    id
    caption
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
  }
}
`;
export const updateStory = `mutation UpdateStory(
  $input: UpdateStoryInput!
  $condition: ModelStoryConditionInput
) {
  updateStory(input: $input, condition: $condition) {
    id
    caption
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
  }
}
`;
export const deleteStory = `mutation DeleteStory(
  $input: DeleteStoryInput!
  $condition: ModelStoryConditionInput
) {
  deleteStory(input: $input, condition: $condition) {
    id
    caption
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
  }
}
`;
export const createPost = `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
    id
    caption
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
    comments {
      items {
        id
        postID
        content
        time
        owner
      }
      nextToken
    }
  }
}
`;
export const updatePost = `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
    id
    caption
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
    comments {
      items {
        id
        postID
        content
        time
        owner
      }
      nextToken
    }
  }
}
`;
export const deletePost = `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
    id
    caption
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
    comments {
      items {
        id
        postID
        content
        time
        owner
      }
      nextToken
    }
  }
}
`;
export const createComment = `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    postID
    content
    time
    owner
  }
}
`;
export const updateComment = `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    postID
    content
    time
    owner
  }
}
`;
export const deleteComment = `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    postID
    content
    time
    owner
  }
}
`;
export const createFollowlist = `mutation CreateFollowlist(
  $input: CreateFollowlistInput!
  $condition: ModelFollowlistConditionInput
) {
  createFollowlist(input: $input, condition: $condition) {
    id
    followingid
    owner
  }
}
`;
export const updateFollowlist = `mutation UpdateFollowlist(
  $input: UpdateFollowlistInput!
  $condition: ModelFollowlistConditionInput
) {
  updateFollowlist(input: $input, condition: $condition) {
    id
    followingid
    owner
  }
}
`;
export const deleteFollowlist = `mutation DeleteFollowlist(
  $input: DeleteFollowlistInput!
  $condition: ModelFollowlistConditionInput
) {
  deleteFollowlist(input: $input, condition: $condition) {
    id
    followingid
    owner
  }
}
`;
export const createBoxinfo = `mutation CreateBoxinfo(
  $input: CreateBoxinfoInput!
  $condition: ModelBoxinfoConditionInput
) {
  createBoxinfo(input: $input, condition: $condition) {
    id
    boxname
    boxtype
    boximg {
      bucket
      region
      key
    }
    boxabout
    time
    owner
  }
}
`;
export const updateBoxinfo = `mutation UpdateBoxinfo(
  $input: UpdateBoxinfoInput!
  $condition: ModelBoxinfoConditionInput
) {
  updateBoxinfo(input: $input, condition: $condition) {
    id
    boxname
    boxtype
    boximg {
      bucket
      region
      key
    }
    boxabout
    time
    owner
  }
}
`;
export const deleteBoxinfo = `mutation DeleteBoxinfo(
  $input: DeleteBoxinfoInput!
  $condition: ModelBoxinfoConditionInput
) {
  deleteBoxinfo(input: $input, condition: $condition) {
    id
    boxname
    boxtype
    boximg {
      bucket
      region
      key
    }
    boxabout
    time
    owner
  }
}
`;
export const createGroupinfo = `mutation CreateGroupinfo(
  $input: CreateGroupinfoInput!
  $condition: ModelGroupinfoConditionInput
) {
  createGroupinfo(input: $input, condition: $condition) {
    id
    groupname
    groupimg {
      bucket
      region
      key
    }
    groupabout
    time
    owner
  }
}
`;
export const updateGroupinfo = `mutation UpdateGroupinfo(
  $input: UpdateGroupinfoInput!
  $condition: ModelGroupinfoConditionInput
) {
  updateGroupinfo(input: $input, condition: $condition) {
    id
    groupname
    groupimg {
      bucket
      region
      key
    }
    groupabout
    time
    owner
  }
}
`;
export const deleteGroupinfo = `mutation DeleteGroupinfo(
  $input: DeleteGroupinfoInput!
  $condition: ModelGroupinfoConditionInput
) {
  deleteGroupinfo(input: $input, condition: $condition) {
    id
    groupname
    groupimg {
      bucket
      region
      key
    }
    groupabout
    time
    owner
  }
}
`;
export const createUserboxes = `mutation CreateUserboxes(
  $input: CreateUserboxesInput!
  $condition: ModelUserboxesConditionInput
) {
  createUserboxes(input: $input, condition: $condition) {
    id
    boxid
    time
    admin
    owner
  }
}
`;
export const updateUserboxes = `mutation UpdateUserboxes(
  $input: UpdateUserboxesInput!
  $condition: ModelUserboxesConditionInput
) {
  updateUserboxes(input: $input, condition: $condition) {
    id
    boxid
    time
    admin
    owner
  }
}
`;
export const deleteUserboxes = `mutation DeleteUserboxes(
  $input: DeleteUserboxesInput!
  $condition: ModelUserboxesConditionInput
) {
  deleteUserboxes(input: $input, condition: $condition) {
    id
    boxid
    time
    admin
    owner
  }
}
`;
export const createUsergroups = `mutation CreateUsergroups(
  $input: CreateUsergroupsInput!
  $condition: ModelUsergroupsConditionInput
) {
  createUsergroups(input: $input, condition: $condition) {
    id
    groupid
    time
    admin
    owner
  }
}
`;
export const updateUsergroups = `mutation UpdateUsergroups(
  $input: UpdateUsergroupsInput!
  $condition: ModelUsergroupsConditionInput
) {
  updateUsergroups(input: $input, condition: $condition) {
    id
    groupid
    time
    admin
    owner
  }
}
`;
export const deleteUsergroups = `mutation DeleteUsergroups(
  $input: DeleteUsergroupsInput!
  $condition: ModelUsergroupsConditionInput
) {
  deleteUsergroups(input: $input, condition: $condition) {
    id
    groupid
    time
    admin
    owner
  }
}
`;
export const createGroupboxes = `mutation CreateGroupboxes(
  $input: CreateGroupboxesInput!
  $condition: ModelGroupboxesConditionInput
) {
  createGroupboxes(input: $input, condition: $condition) {
    id
    boxid
    groupid
    time
    owner
  }
}
`;
export const updateGroupboxes = `mutation UpdateGroupboxes(
  $input: UpdateGroupboxesInput!
  $condition: ModelGroupboxesConditionInput
) {
  updateGroupboxes(input: $input, condition: $condition) {
    id
    boxid
    groupid
    time
    owner
  }
}
`;
export const deleteGroupboxes = `mutation DeleteGroupboxes(
  $input: DeleteGroupboxesInput!
  $condition: ModelGroupboxesConditionInput
) {
  deleteGroupboxes(input: $input, condition: $condition) {
    id
    boxid
    groupid
    time
    owner
  }
}
`;
export const createMoment = `mutation CreateMoment(
  $input: CreateMomentInput!
  $condition: ModelMomentConditionInput
) {
  createMoment(input: $input, condition: $condition) {
    id
    boxid
    caption
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
  }
}
`;
export const updateMoment = `mutation UpdateMoment(
  $input: UpdateMomentInput!
  $condition: ModelMomentConditionInput
) {
  updateMoment(input: $input, condition: $condition) {
    id
    boxid
    caption
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
  }
}
`;
export const deleteMoment = `mutation DeleteMoment(
  $input: DeleteMomentInput!
  $condition: ModelMomentConditionInput
) {
  deleteMoment(input: $input, condition: $condition) {
    id
    boxid
    caption
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
  }
}
`;
export const createBpost = `mutation CreateBpost(
  $input: CreateBpostInput!
  $condition: ModelBpostConditionInput
) {
  createBpost(input: $input, condition: $condition) {
    id
    boxid
    caption
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
    comments {
      items {
        id
        bpostID
        content
        time
        owner
      }
      nextToken
    }
  }
}
`;
export const updateBpost = `mutation UpdateBpost(
  $input: UpdateBpostInput!
  $condition: ModelBpostConditionInput
) {
  updateBpost(input: $input, condition: $condition) {
    id
    boxid
    caption
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
    comments {
      items {
        id
        bpostID
        content
        time
        owner
      }
      nextToken
    }
  }
}
`;
export const deleteBpost = `mutation DeleteBpost(
  $input: DeleteBpostInput!
  $condition: ModelBpostConditionInput
) {
  deleteBpost(input: $input, condition: $condition) {
    id
    boxid
    caption
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
    comments {
      items {
        id
        bpostID
        content
        time
        owner
      }
      nextToken
    }
  }
}
`;
export const createCommentbpost = `mutation CreateCommentbpost(
  $input: CreateCommentbpostInput!
  $condition: ModelCommentbpostConditionInput
) {
  createCommentbpost(input: $input, condition: $condition) {
    id
    bpostID
    content
    time
    owner
  }
}
`;
export const updateCommentbpost = `mutation UpdateCommentbpost(
  $input: UpdateCommentbpostInput!
  $condition: ModelCommentbpostConditionInput
) {
  updateCommentbpost(input: $input, condition: $condition) {
    id
    bpostID
    content
    time
    owner
  }
}
`;
export const deleteCommentbpost = `mutation DeleteCommentbpost(
  $input: DeleteCommentbpostInput!
  $condition: ModelCommentbpostConditionInput
) {
  deleteCommentbpost(input: $input, condition: $condition) {
    id
    bpostID
    content
    time
    owner
  }
}
`;
export const createCricketscore = `mutation CreateCricketscore(
  $input: CreateCricketscoreInput!
  $condition: ModelCricketscoreConditionInput
) {
  createCricketscore(input: $input, condition: $condition) {
    id
    boxid
    score
    time
    owner
  }
}
`;
export const updateCricketscore = `mutation UpdateCricketscore(
  $input: UpdateCricketscoreInput!
  $condition: ModelCricketscoreConditionInput
) {
  updateCricketscore(input: $input, condition: $condition) {
    id
    boxid
    score
    time
    owner
  }
}
`;
export const deleteCricketscore = `mutation DeleteCricketscore(
  $input: DeleteCricketscoreInput!
  $condition: ModelCricketscoreConditionInput
) {
  deleteCricketscore(input: $input, condition: $condition) {
    id
    boxid
    score
    time
    owner
  }
}
`;
export const createCricketstatus = `mutation CreateCricketstatus(
  $input: CreateCricketstatusInput!
  $condition: ModelCricketstatusConditionInput
) {
  createCricketstatus(input: $input, condition: $condition) {
    id
    boxid
    status
    time
    owner
  }
}
`;
export const updateCricketstatus = `mutation UpdateCricketstatus(
  $input: UpdateCricketstatusInput!
  $condition: ModelCricketstatusConditionInput
) {
  updateCricketstatus(input: $input, condition: $condition) {
    id
    boxid
    status
    time
    owner
  }
}
`;
export const deleteCricketstatus = `mutation DeleteCricketstatus(
  $input: DeleteCricketstatusInput!
  $condition: ModelCricketstatusConditionInput
) {
  deleteCricketstatus(input: $input, condition: $condition) {
    id
    boxid
    status
    time
    owner
  }
}
`;
export const createBirthday = `mutation CreateBirthday(
  $input: CreateBirthdayInput!
  $condition: ModelBirthdayConditionInput
) {
  createBirthday(input: $input, condition: $condition) {
    id
    boxid
    birthdayimg {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const updateBirthday = `mutation UpdateBirthday(
  $input: UpdateBirthdayInput!
  $condition: ModelBirthdayConditionInput
) {
  updateBirthday(input: $input, condition: $condition) {
    id
    boxid
    birthdayimg {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const deleteBirthday = `mutation DeleteBirthday(
  $input: DeleteBirthdayInput!
  $condition: ModelBirthdayConditionInput
) {
  deleteBirthday(input: $input, condition: $condition) {
    id
    boxid
    birthdayimg {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const createNotifications = `mutation CreateNotifications(
  $input: CreateNotificationsInput!
  $condition: ModelNotificationsConditionInput
) {
  createNotifications(input: $input, condition: $condition) {
    id
    boxid
    time
    owner
  }
}
`;
export const updateNotifications = `mutation UpdateNotifications(
  $input: UpdateNotificationsInput!
  $condition: ModelNotificationsConditionInput
) {
  updateNotifications(input: $input, condition: $condition) {
    id
    boxid
    time
    owner
  }
}
`;
export const deleteNotifications = `mutation DeleteNotifications(
  $input: DeleteNotificationsInput!
  $condition: ModelNotificationsConditionInput
) {
  deleteNotifications(input: $input, condition: $condition) {
    id
    boxid
    time
    owner
  }
}
`;
export const createFeedback = `mutation CreateFeedback(
  $input: CreateFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  createFeedback(input: $input, condition: $condition) {
    id
    feed
    time
    owner
  }
}
`;
export const updateFeedback = `mutation UpdateFeedback(
  $input: UpdateFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  updateFeedback(input: $input, condition: $condition) {
    id
    feed
    time
    owner
  }
}
`;
export const deleteFeedback = `mutation DeleteFeedback(
  $input: DeleteFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  deleteFeedback(input: $input, condition: $condition) {
    id
    feed
    time
    owner
  }
}
`;
export const createBigbox = `mutation CreateBigbox(
  $input: CreateBigboxInput!
  $condition: ModelBigboxConditionInput
) {
  createBigbox(input: $input, condition: $condition) {
    id
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
  }
}
`;
export const updateBigbox = `mutation UpdateBigbox(
  $input: UpdateBigboxInput!
  $condition: ModelBigboxConditionInput
) {
  updateBigbox(input: $input, condition: $condition) {
    id
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
  }
}
`;
export const deleteBigbox = `mutation DeleteBigbox(
  $input: DeleteBigboxInput!
  $condition: ModelBigboxConditionInput
) {
  deleteBigbox(input: $input, condition: $condition) {
    id
    storyfile {
      bucket
      region
      key
    }
    filetype
    time
    owner
  }
}
`;
export const createShare = `mutation CreateShare(
  $input: CreateShareInput!
  $condition: ModelShareConditionInput
) {
  createShare(input: $input, condition: $condition) {
    id
    postid
    time
    owner
  }
}
`;
export const updateShare = `mutation UpdateShare(
  $input: UpdateShareInput!
  $condition: ModelShareConditionInput
) {
  updateShare(input: $input, condition: $condition) {
    id
    postid
    time
    owner
  }
}
`;
export const deleteShare = `mutation DeleteShare(
  $input: DeleteShareInput!
  $condition: ModelShareConditionInput
) {
  deleteShare(input: $input, condition: $condition) {
    id
    postid
    time
    owner
  }
}
`;
export const createChatbox = `mutation CreateChatbox(
  $input: CreateChatboxInput!
  $condition: ModelChatboxConditionInput
) {
  createChatbox(input: $input, condition: $condition) {
    id
    boxid
    content
    time
    owner
  }
}
`;
export const updateChatbox = `mutation UpdateChatbox(
  $input: UpdateChatboxInput!
  $condition: ModelChatboxConditionInput
) {
  updateChatbox(input: $input, condition: $condition) {
    id
    boxid
    content
    time
    owner
  }
}
`;
export const deleteChatbox = `mutation DeleteChatbox(
  $input: DeleteChatboxInput!
  $condition: ModelChatboxConditionInput
) {
  deleteChatbox(input: $input, condition: $condition) {
    id
    boxid
    content
    time
    owner
  }
}
`;
