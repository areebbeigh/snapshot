setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git fetch
  git branch -a
  git checkout master
  git add --all
  git commit --message "[ci skip] Travis build: $TRAVIS_BUILD_NUMBER"
  git checkout deployed
  git checkout master package.json test.txt public/* seeds/*
  git status
  git commit -m "[ci skip] Travis build: $TRAVIS_BUILD_NUMBER"
  git push origin deployed
}

set_origin() {
  git remote remove origin
  git remote add origin https://${GH_TOKEN}@github.com/areebbeigh/TabTracker.git
}

setup_git
set_origin
commit_website_files