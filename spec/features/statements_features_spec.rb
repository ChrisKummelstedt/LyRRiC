# require 'rails_helper'
#
# feature 'user can submit statements' do
#
#   context 'user signed in and on the homepage' do
#
#     before do
#       visit('/')
#       click_link('Sign up')
#       fill_in('Email', with: 'test@example.com')
#       fill_in('User name', with: 'testuser')
#       fill_in('Password', with: 'testtest')
#       fill_in('Password confirmation', with: 'testtest')
#       click_button('Sign up')
#     end
#
#     it 'should see the button for creating a new statement' do
#       visit '/'
#       expect(page).to have_link 'New Statement'
#     end
#
#     it 'should be able to submit a new statement' do
#       visit '/'
#       click_link 'New Statement'
#       fill_in 'Title', with: 'Donald Trump\'s real family name is Drumpf'
#       click_button 'Create Statement'
#       expect(Statement.count).to eq 1
#       expect(page).to have_content 'Donald Trump\'s real family name is Drumpf'
#     end
#
#   end

# end
