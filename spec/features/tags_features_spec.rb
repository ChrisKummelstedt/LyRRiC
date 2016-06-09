# require 'rails_helper'
#
# feature 'user can tag statements' do
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
#     it 'should be able to submit a new statement and add a tag' do
#       visit '/'
#       click_link 'New Statement'
#       fill_in 'Title', with: 'Donald Trump\'s real family name is Drumpf'
#       fill_in 'statement_all_tags', with: 'US, Politics'
#       click_button 'Create Statement'
#       expect(Statement.first.tags.count).to eq 2
#       expect(page).to have_content("US")
#       expect(page).to have_content("Politics")
#     end
#
#   end

# end
