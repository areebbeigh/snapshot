echo "Switching branches"
git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
git config --get remote.origin.fetch
git fetch
git branch -a
git checkout deployed
rm -rf *
git checkout master .