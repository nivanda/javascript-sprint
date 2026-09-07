function isAuthorizedUser(authorizedUsers) {
	return function (id) {
		return authorizedUsers.includes(id)
	}
}
