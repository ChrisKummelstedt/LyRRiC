# feature 'voting' do
#   # before do
#   #   sign_up1
#   #   add_statement
#   #   click_button('Sign out')
#   #   sign_up2
#   # end
#
#   scenario "allows users to vote 'Fact' on a statement" do
#      visit '/statements'
#      click_button 'Fact'
#      expect(page).to have_content('100% Fact')
#      expect(page).to have_content('1 vote')
#   end
#
#   scenario "allows users to vote 'Fiction' on a statement" do
#      visit '/statements'
#      click_button 'Fiction'
#      expect(page).to have_content('100% Fiction')
#      expect(page).to have_content('1 vote')
#   end
# end
