/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserinfo = `subscription OnCreateUserinfo($owner: String!) {
  onCreateUserinfo(owner: $owner) {
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
export const onUpdateUserinfo = `subscription OnUpdateUserinfo($owner: String!) {
  onUpdateUserinfo(owner: $owner) {
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
export const onDeleteUserinfo = `subscription OnDeleteUserinfo($owner: String!) {
  onDeleteUserinfo(owner: $owner) {
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
export const onCreateProfilestatus = `subscription OnCreateProfilestatus($owner: String!) {
  onCreateProfilestatus(owner: $owner) {
    id
    status
    owner
  }
}
`;
export const onUpdateProfilestatus = `subscription OnUpdateProfilestatus($owner: String!) {
  onUpdateProfilestatus(owner: $owner) {
    id
    status
    owner
  }
}
`;
export const onDeleteProfilestatus = `subscription OnDeleteProfilestatus($owner: String!) {
  onDeleteProfilestatus(owner: $owner) {
    id
    status
    owner
  }
}
`;
export const onCreateStory = `subscription OnCreateStory($owner: String!) {
  onCreateStory(owner: $owner) {
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
export const onUpdateStory = `subscription OnUpdateStory($owner: String!) {
  onUpdateStory(owner: $owner) {
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
export const onDeleteStory = `subscription OnDeleteStory($owner: String!) {
  onDeleteStory(owner: $owner) {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost($owner: String!) {
  onDeletePost(owner: $owner) {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    postID
    content
    time
    owner
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    postID
    content
    time
    owner
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment($owner: String!) {
  onDeleteComment(owner: $owner) {
    id
    postID
    content
    time
    owner
  }
}
`;
export const onCreateFollowlist = `subscription OnCreateFollowlist($owner: String!) {
  onCreateFollowlist(owner: $owner) {
    id
    followingid
    owner
  }
}
`;
export const onUpdateFollowlist = `subscription OnUpdateFollowlist($owner: String!) {
  onUpdateFollowlist(owner: $owner) {
    id
    followingid
    owner
  }
}
`;
export const onDeleteFollowlist = `subscription OnDeleteFollowlist($owner: String!) {
  onDeleteFollowlist(owner: $owner) {
    id
    followingid
    owner
  }
}
`;
export const onCreateBoxinfo = `subscription OnCreateBoxinfo {
  onCreateBoxinfo {
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
export const onUpdateBoxinfo = `subscription OnUpdateBoxinfo {
  onUpdateBoxinfo {
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
export const onDeleteBoxinfo = `subscription OnDeleteBoxinfo($owner: String!) {
  onDeleteBoxinfo(owner: $owner) {
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
export const onCreateGroupinfo = `subscription OnCreateGroupinfo {
  onCreateGroupinfo {
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
export const onUpdateGroupinfo = `subscription OnUpdateGroupinfo {
  onUpdateGroupinfo {
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
export const onDeleteGroupinfo = `subscription OnDeleteGroupinfo($owner: String!) {
  onDeleteGroupinfo(owner: $owner) {
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
export const onCreateUserboxes = `subscription OnCreateUserboxes($owner: String!) {
  onCreateUserboxes(owner: $owner) {
    id
    boxid
    time
    admin
    owner
  }
}
`;
export const onUpdateUserboxes = `subscription OnUpdateUserboxes {
  onUpdateUserboxes {
    id
    boxid
    time
    admin
    owner
  }
}
`;
export const onDeleteUserboxes = `subscription OnDeleteUserboxes($owner: String!) {
  onDeleteUserboxes(owner: $owner) {
    id
    boxid
    time
    admin
    owner
  }
}
`;
export const onCreateUsergroups = `subscription OnCreateUsergroups($owner: String!) {
  onCreateUsergroups(owner: $owner) {
    id
    groupid
    time
    admin
    owner
  }
}
`;
export const onUpdateUsergroups = `subscription OnUpdateUsergroups {
  onUpdateUsergroups {
    id
    groupid
    time
    admin
    owner
  }
}
`;
export const onDeleteUsergroups = `subscription OnDeleteUsergroups($owner: String!) {
  onDeleteUsergroups(owner: $owner) {
    id
    groupid
    time
    admin
    owner
  }
}
`;
export const onCreateGroupboxes = `subscription OnCreateGroupboxes {
  onCreateGroupboxes {
    id
    boxid
    groupid
    time
    owner
  }
}
`;
export const onUpdateGroupboxes = `subscription OnUpdateGroupboxes {
  onUpdateGroupboxes {
    id
    boxid
    groupid
    time
    owner
  }
}
`;
export const onDeleteGroupboxes = `subscription OnDeleteGroupboxes($owner: String!) {
  onDeleteGroupboxes(owner: $owner) {
    id
    boxid
    groupid
    time
    owner
  }
}
`;
export const onCreateMoment = `subscription OnCreateMoment {
  onCreateMoment {
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
export const onUpdateMoment = `subscription OnUpdateMoment {
  onUpdateMoment {
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
export const onDeleteMoment = `subscription OnDeleteMoment($owner: String!) {
  onDeleteMoment(owner: $owner) {
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
export const onCreateBpost = `subscription OnCreateBpost {
  onCreateBpost {
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
export const onUpdateBpost = `subscription OnUpdateBpost {
  onUpdateBpost {
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
export const onDeleteBpost = `subscription OnDeleteBpost($owner: String!) {
  onDeleteBpost(owner: $owner) {
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
export const onCreateCommentbpost = `subscription OnCreateCommentbpost {
  onCreateCommentbpost {
    id
    bpostID
    content
    time
    owner
  }
}
`;
export const onUpdateCommentbpost = `subscription OnUpdateCommentbpost {
  onUpdateCommentbpost {
    id
    bpostID
    content
    time
    owner
  }
}
`;
export const onDeleteCommentbpost = `subscription OnDeleteCommentbpost($owner: String!) {
  onDeleteCommentbpost(owner: $owner) {
    id
    bpostID
    content
    time
    owner
  }
}
`;
export const onCreateCricketscore = `subscription OnCreateCricketscore {
  onCreateCricketscore {
    id
    boxid
    score
    time
    owner
  }
}
`;
export const onUpdateCricketscore = `subscription OnUpdateCricketscore {
  onUpdateCricketscore {
    id
    boxid
    score
    time
    owner
  }
}
`;
export const onDeleteCricketscore = `subscription OnDeleteCricketscore($owner: String!) {
  onDeleteCricketscore(owner: $owner) {
    id
    boxid
    score
    time
    owner
  }
}
`;
export const onCreateCricketstatus = `subscription OnCreateCricketstatus {
  onCreateCricketstatus {
    id
    boxid
    status
    time
    owner
  }
}
`;
export const onUpdateCricketstatus = `subscription OnUpdateCricketstatus {
  onUpdateCricketstatus {
    id
    boxid
    status
    time
    owner
  }
}
`;
export const onDeleteCricketstatus = `subscription OnDeleteCricketstatus($owner: String!) {
  onDeleteCricketstatus(owner: $owner) {
    id
    boxid
    status
    time
    owner
  }
}
`;
export const onCreateBirthday = `subscription OnCreateBirthday($owner: String!) {
  onCreateBirthday(owner: $owner) {
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
export const onUpdateBirthday = `subscription OnUpdateBirthday($owner: String!) {
  onUpdateBirthday(owner: $owner) {
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
export const onDeleteBirthday = `subscription OnDeleteBirthday($owner: String!) {
  onDeleteBirthday(owner: $owner) {
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
export const onCreateNotifications = `subscription OnCreateNotifications {
  onCreateNotifications {
    id
    boxid
    time
    owner
  }
}
`;
export const onUpdateNotifications = `subscription OnUpdateNotifications {
  onUpdateNotifications {
    id
    boxid
    time
    owner
  }
}
`;
export const onDeleteNotifications = `subscription OnDeleteNotifications($owner: String!) {
  onDeleteNotifications(owner: $owner) {
    id
    boxid
    time
    owner
  }
}
`;
export const onCreateFeedback = `subscription OnCreateFeedback($owner: String!) {
  onCreateFeedback(owner: $owner) {
    id
    feed
    time
    owner
  }
}
`;
export const onUpdateFeedback = `subscription OnUpdateFeedback($owner: String!) {
  onUpdateFeedback(owner: $owner) {
    id
    feed
    time
    owner
  }
}
`;
export const onDeleteFeedback = `subscription OnDeleteFeedback {
  onDeleteFeedback {
    id
    feed
    time
    owner
  }
}
`;
export const onCreateBigbox = `subscription OnCreateBigbox($owner: String!) {
  onCreateBigbox(owner: $owner) {
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
export const onUpdateBigbox = `subscription OnUpdateBigbox($owner: String!) {
  onUpdateBigbox(owner: $owner) {
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
export const onDeleteBigbox = `subscription OnDeleteBigbox {
  onDeleteBigbox {
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
export const onCreateShare = `subscription OnCreateShare {
  onCreateShare {
    id
    postid
    time
    owner
  }
}
`;
export const onUpdateShare = `subscription OnUpdateShare {
  onUpdateShare {
    id
    postid
    time
    owner
  }
}
`;
export const onDeleteShare = `subscription OnDeleteShare($owner: String!) {
  onDeleteShare(owner: $owner) {
    id
    postid
    time
    owner
  }
}
`;
export const onCreateChatbox = `subscription OnCreateChatbox($owner: String!) {
  onCreateChatbox(owner: $owner) {
    id
    boxid
    content
    time
    owner
  }
}
`;
export const onUpdateChatbox = `subscription OnUpdateChatbox($owner: String!) {
  onUpdateChatbox(owner: $owner) {
    id
    boxid
    content
    time
    owner
  }
}
`;
export const onDeleteChatbox = `subscription OnDeleteChatbox($owner: String!) {
  onDeleteChatbox(owner: $owner) {
    id
    boxid
    content
    time
    owner
  }
}
`;
