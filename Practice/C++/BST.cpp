#include<iostream>
#include<vector>
using namespace std;

class Node{
  public:
  int val;
  Node* left;
  Node* right;
  Node(int x){
    val=x;
    left=NULL;
    right=NULL;
  }
};

Node* insert(Node* head,int x){
  if(head==NULL){
    return new Node(x);
  }
  if(head->val>x){
    head->left=insert(head->left,x);
  }else{
    head->right=insert(head->right,x);
  }
  return head;
}

Node* Build_BST(vector<int>val){
  Node* head=NULL;
  for(auto v:val){
    head=insert(head,v);
  }
  return head;
}

void iterate(Node* head){
  if(head==NULL){
    return;
  }
  
  iterate(head->left);
  cout<<head->val<<" ";
  iterate(head->right);
}
bool search(Node* head,int x){
  if(head==NULL){
    return false;
  }
  if(head->val==x){
    return true;
  }
  if(x>head->val){
    return search(head->right,x);
  }else{
    return search(head->left,x);
  }

}
Node* getNearest(Node* root){
  while(root->left){
    root=root->left;
  }
  return root;
}
Node* deleteNode(Node* root,int point){
  if(root->val>point){
    root->left=deleteNode(root->left,point);
  }else if(root->val<point){
    root->right=deleteNode(root->right,point);
  }else{
    if(root->left==NULL){
      Node* temp=root->right;
      delete root;
      return temp;
    }else if(root->right==NULL){
      Node* temp=root->left;
      delete root;
      return temp;
    }else{
      Node* NI=getNearest(root->right);
      root->val=NI->val;
     root->right = deleteNode(root->right, NI->val);

    }
  }
  return root;

}

int main(){
  vector<int>v={9,8,11,7,5,20,3,2,1};
  Node* head=Build_BST(v);
  Node* newBST=deleteNode(head,20);
  iterate(newBST);
  // bool x=search(head,200);
  // cout<<x;
}