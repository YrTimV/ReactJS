class UserService {
  _users = [];

  getUserList(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(users => {
        this._users = users;
        callback(this._users);
      })
      .catch(() => {
        this._users = [];
      });
  }

  getUser(username) {
    return this._users.find(user => user.username === username);
  }
}

export default new UserService();
