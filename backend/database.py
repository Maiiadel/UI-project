from databaseStructure import *
from databaseClasses.Project import Project
from databaseClasses.File import File
from databaseClasses.User import User
from databaseClasses.Item import Item

    
def getItems():
    project = Item()
    data = project.get_items()
    return data


def delete_file(deleted_file):
    file_wanted_to_be_deleted = File(file_name = deleted_file["file_name"],)
    file_ref = file_wanted_to_be_deleted.delete_single_file(deleted_file)
    return file_ref


def delete_specific_project(deleted_project):
    project = Project(user_id=deleted_project["user_id"],
                      project_id=deleted_project["project_id"])
    time_deletion_of_project = project.delete_single_project()    
    return time_deletion_of_project


def add_file_to_project(file_data): 
    project = Project(user_id = file_data["user_id"],
                      project_id = file_data["project_id"])   
    file_reference = project.add_file_to_project(file_data)
    return file_reference


def add_user(user_data):
    new_user = User(email = user_data["email"],
                    first_name = user_data["first_name"],
                    last_name = user_data["last_name"], 
                    role = user_data["role"])
    response_on_creating_user = new_user.add_user()
    return response_on_creating_user


def get_subcollection_projects(user_id):
    projects_of_user = Project(user_id=user_id)
    data = projects_of_user.get_multiple_projects()
    return data
    
def get_specific_project(user_id, project_id):
    project = Project(user_id=user_id,
                      project_id=project_id)
    data = project.get_single_project()
    return data
    
def add_single_project(user_id, project_name, description):
    new_project = Project(user_id=user_id,
                          project_name=project_name,
                          description=description)
    response = new_project.add_single_project()
    return response
    
    
def send_project_files_URLs(user_id, project_id):
    project_data = get_specific_project(user_id=user_id,
                                        project_id=project_id)
    files = [value["url_reference"] for (key,value) in project_data[project_id]["files"].items()]
    print(f'FILES IN SEND_PROJECT_FILES = {files}')
    return  files
    

def upload_generated_UML_image_to_firebase():
    pass