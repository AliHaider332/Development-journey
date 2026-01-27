#include<iostream>
#include<vector>
#include<stack>
#include<queue>
using namespace std;
class node{
  public:
  int data;
  node* left;
  node* right;
  node(int x){
    data=x;
    left=NULL;
    right=NULL;
  }

};

node* build_tree(vector<int>& v, int &index) {
    if (index >= v.size() || v[index] == -1) {
        index++;
        return NULL;
    }

    node* temp = new node(v[index]);
    index++;

    temp->left = build_tree(v, index);
    temp->right = build_tree(v, index);

    return temp;
}


void PRE_ORDER_TRIVERSAL(node* root,vector<int>&ans){
  if(root==NULL){
    return;
  }
  ans.push_back(root->data);
  PRE_ORDER_TRIVERSAL(root->left,ans);
  PRE_ORDER_TRIVERSAL(root->right,ans);
}

void IN_Order_Triversal(node* root,vector<int>&ans){
  if(root==NULL){
    return;
  }
  // ans.push_back(root->data);
  IN_Order_Triversal(root->left,ans);
  ans.push_back(root->data);
  IN_Order_Triversal(root->right,ans);
}
void POST_Order_Triversal(node* root,vector<int>&ans){
  if(root==NULL){
    return;
  }
  // ans.push_back(root->data);
  
  POST_Order_Triversal(root->right,ans);
  ans.push_back(root->data);
  POST_Order_Triversal(root->left,ans);
  
}

void BFS(node* root,vector<int>&ans){
  queue<node*>q;
  q.push(root);  
  while(!q.empty()){
    node* temp=q.front();
    q.pop();
    if(temp->left)
      q.push(temp->left);
    if(temp->right)
      q.push(temp->right);
    ans.push_back(temp->data);
  }

}
void DFS(node* root, vector<int>& ans){
    if(root == NULL) return;

    stack<node*> st;
    st.push(root);

    while(!st.empty()){
        node* curr = st.top();
        st.pop();

        ans.push_back(curr->data); // visit

        // push right first so left comes first
        if(curr->right) st.push(curr->right);
        if(curr->left)  st.push(curr->left);
    }
}

int main(){
  vector<int>v={1,2,-1,-1,3,4,-1,-1,5,-1,-1};
  int x=0;
  node* root=build_tree(v,x);
  // cout<<root->data;
  // cout<<root->left->data;
  // cout<<root->right->data;
  vector<int>ans;
  DFS(root,ans);
  for(int i=0;i<ans.size();i++){
    cout<<ans[i]<<" ";
  }


}