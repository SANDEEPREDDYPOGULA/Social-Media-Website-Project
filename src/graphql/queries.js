/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserinfo = `query GetUserinfo($id: ID!) {
  getUserinfo(id: $id) {
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
export const listUserinfos = `query ListUserinfos(
  $filter: ModelUserinfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserinfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getProfilestatus = `query GetProfilestatus($id: ID!) {
  getProfilestatus(id: $id) {
    id
    status
    owner
  }
}
`;
export const listProfilestatuss = `query ListProfilestatuss(
  $filter: ModelProfilestatusFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfilestatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      owner
    }
    nextToken
  }
}
`;
export const getStory = `query GetStory($id: ID!) {
  getStory(id: $id) {
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
export const listStorys = `query ListStorys(
  $filter: ModelStoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    postID
    content
    time
    owner
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const getFollowlist = `query GetFollowlist($id: ID!) {
  getFollowlist(id: $id) {
    id
    followingid
    owner
  }
}
`;
export const listFollowlists = `query ListFollowlists(
  $filter: ModelFollowlistFilterInput
  $limit: Int
  $nextToken: String
) {
  listFollowlists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      followingid
      owner
    }
    nextToken
  }
}
`;
export const getBoxinfo = `query GetBoxinfo($id: ID!) {
  getBoxinfo(id: $id) {
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
export const listBoxinfos = `query ListBoxinfos(
  $filter: ModelBoxinfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listBoxinfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getGroupinfo = `query GetGroupinfo($id: ID!) {
  getGroupinfo(id: $id) {
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
export const listGroupinfos = `query ListGroupinfos(
  $filter: ModelGroupinfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroupinfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getUserboxes = `query GetUserboxes($id: ID!) {
  getUserboxes(id: $id) {
    id
    boxid
    time
    admin
    owner
  }
}
`;
export const listUserboxess = `query ListUserboxess(
  $filter: ModelUserboxesFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserboxess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      boxid
      time
      admin
      owner
    }
    nextToken
  }
}
`;
export const getUsergroups = `query GetUsergroups($id: ID!) {
  getUsergroups(id: $id) {
    id
    groupid
    time
    admin
    owner
  }
}
`;
export const listUsergroupss = `query ListUsergroupss(
  $filter: ModelUsergroupsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsergroupss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      groupid
      time
      admin
      owner
    }
    nextToken
  }
}
`;
export const getGroupboxes = `query GetGroupboxes($id: ID!) {
  getGroupboxes(id: $id) {
    id
    boxid
    groupid
    time
    owner
  }
}
`;
export const listGroupboxess = `query ListGroupboxess(
  $filter: ModelGroupboxesFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroupboxess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      boxid
      groupid
      time
      owner
    }
    nextToken
  }
}
`;
export const getMoment = `query GetMoment($id: ID!) {
  getMoment(id: $id) {
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
export const listMoments = `query ListMoments(
  $filter: ModelMomentFilterInput
  $limit: Int
  $nextToken: String
) {
  listMoments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getBpost = `query GetBpost($id: ID!) {
  getBpost(id: $id) {
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
export const listBposts = `query ListBposts(
  $filter: ModelBpostFilterInput
  $limit: Int
  $nextToken: String
) {
  listBposts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCommentbpost = `query GetCommentbpost($id: ID!) {
  getCommentbpost(id: $id) {
    id
    bpostID
    content
    time
    owner
  }
}
`;
export const listCommentbposts = `query ListCommentbposts(
  $filter: ModelCommentbpostFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommentbposts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const getCricketscore = `query GetCricketscore($id: ID!) {
  getCricketscore(id: $id) {
    id
    boxid
    score
    time
    owner
  }
}
`;
export const listCricketscores = `query ListCricketscores(
  $filter: ModelCricketscoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listCricketscores(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      boxid
      score
      time
      owner
    }
    nextToken
  }
}
`;
export const getCricketstatus = `query GetCricketstatus($id: ID!) {
  getCricketstatus(id: $id) {
    id
    boxid
    status
    time
    owner
  }
}
`;
export const listCricketstatuss = `query ListCricketstatuss(
  $filter: ModelCricketstatusFilterInput
  $limit: Int
  $nextToken: String
) {
  listCricketstatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      boxid
      status
      time
      owner
    }
    nextToken
  }
}
`;
export const getBirthday = `query GetBirthday($id: ID!) {
  getBirthday(id: $id) {
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
export const listBirthdays = `query ListBirthdays(
  $filter: ModelBirthdayFilterInput
  $limit: Int
  $nextToken: String
) {
  listBirthdays(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      boxid
      birthdayimg {
        bucket
        region
        key
      }
      owner
    }
    nextToken
  }
}
`;
export const getNotifications = `query GetNotifications($id: ID!) {
  getNotifications(id: $id) {
    id
    boxid
    time
    owner
  }
}
`;
export const listNotificationss = `query ListNotificationss(
  $filter: ModelNotificationsFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotificationss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      boxid
      time
      owner
    }
    nextToken
  }
}
`;
export const getFeedback = `query GetFeedback($id: ID!) {
  getFeedback(id: $id) {
    id
    feed
    time
    owner
  }
}
`;
export const listFeedbacks = `query ListFeedbacks(
  $filter: ModelFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      feed
      time
      owner
    }
    nextToken
  }
}
`;
export const getBigbox = `query GetBigbox($id: ID!) {
  getBigbox(id: $id) {
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
export const listBigboxs = `query ListBigboxs(
  $filter: ModelBigboxFilterInput
  $limit: Int
  $nextToken: String
) {
  listBigboxs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getShare = `query GetShare($id: ID!) {
  getShare(id: $id) {
    id
    postid
    time
    owner
  }
}
`;
export const listShares = `query ListShares(
  $filter: ModelShareFilterInput
  $limit: Int
  $nextToken: String
) {
  listShares(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postid
      time
      owner
    }
    nextToken
  }
}
`;
export const getChatbox = `query GetChatbox($id: ID!) {
  getChatbox(id: $id) {
    id
    boxid
    content
    time
    owner
  }
}
`;
export const listChatboxs = `query ListChatboxs(
  $filter: ModelChatboxFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatboxs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      boxid
      content
      time
      owner
    }
    nextToken
  }
}
`;
export const searchUserinfos = `query SearchUserinfos(
  $filter: SearchableUserinfoFilterInput
  $sort: SearchableUserinfoSortInput
  $limit: Int
  $nextToken: String
) {
  searchUserinfos(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    total
  }
}
`;
export const searchBoxinfos = `query SearchBoxinfos(
  $filter: SearchableBoxinfoFilterInput
  $sort: SearchableBoxinfoSortInput
  $limit: Int
  $nextToken: String
) {
  searchBoxinfos(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    total
  }
}
`;
export const searchGroupinfos = `query SearchGroupinfos(
  $filter: SearchableGroupinfoFilterInput
  $sort: SearchableGroupinfoSortInput
  $limit: Int
  $nextToken: String
) {
  searchGroupinfos(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    total
  }
}
`;
