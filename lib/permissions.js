ownsPetDoc = function(userId, doc) {
	if (doc && doc.userId === userId) {
	return true;
	}
}