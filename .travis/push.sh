setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git branch -a
  # git checkout -f deployed
  git add --all
  git add -f build/*
  git commit --message "[ci skip] Travis build: $TRAVIS_BUILD_NUMBER"
  git push origin deployed
}

set_origin() {
  git remote remove origin
  git remote add origin https://${GH_TOKEN}@github.com/areebbeigh/snapshot.git
}

setup_git
set_origin
commit_website_files